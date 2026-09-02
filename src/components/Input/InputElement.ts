import { actions, isInputError } from "astro:actions";
import { InputElementValidation } from "#/components/Input/InputElementValidation.ts";
import { theme } from "#/styles/theme.ts";
import { styles } from "./Input.css.ts";

export class InputElement extends HTMLElement {
  private action?: keyof typeof actions;

  private readonly handleBlur = () => {
    if (this.isDirty === null) {
      return;
    }
    if (!this.isDirty) {
      this.isDirty = true;
    }

    this.validate(true);
  };

  private readonly handleInput = () => {
    if (this.isDirty === null && this.validateOn !== null) {
      this.isDirty = false;
    }

    if (this.isDirty && this.validateOn === "change") {
      this.validate();
    }

    if (this.element instanceof HTMLTextAreaElement) {
      this.element.style.height = "auto";
      this.element.style.height = `${this.element.scrollHeight}px`;
    }
  };

  private isDirty: boolean | null = null;

  private message?: HTMLParagraphElement;

  private readonly root: HTMLLabelElement;

  private showMessage = false;

  private validate(now = false) {
    if (!this.action) {
      return;
    }
    if (!this.validation) {
      const { action } = this;

      this.validation = new InputElementValidation(
        (value) => {
          const formData = new FormData();
          formData.append(this.element.name, value);
          return actions[action](formData);
        },
        ({ error }) => {
          if (isInputError(error)) {
            const name = this.element.name as keyof typeof error.fields;
            const message = error.fields[name];

            if (message?.length) {
              this.setMessage(message[0], "error");
            } else {
              this.setMessage();
            }
          }
        },
      );
    }

    if (now) {
      this.validation.now(this.element.value);
    } else {
      this.validation.debounce(this.element.value);
    }
  }

  private validateOn: "blur" | "change" | null = null;

  private validation: InputElementValidation<
    Awaited<ReturnType<(typeof actions)[keyof typeof actions]>>
  > | null = null;

  element: HTMLInputElement | HTMLTextAreaElement;

  constructor() {
    super();

    this.element = this.previousElementSibling as typeof this.element;
    this.root = this.parentElement as HTMLLabelElement;
  }

  connectedCallback() {
    this.element.addEventListener("blur", this.handleBlur);
    this.element.addEventListener("input", this.handleInput);
    this.setValidateOn(this.dataset.validateOn as typeof this.validateOn);
  }

  disconnectedCallback() {
    this.element.removeEventListener("blur", this.handleBlur);
    this.element.removeEventListener("input", this.handleInput);
  }

  setAction(action: keyof typeof actions) {
    this.action = action;
    this.validation = null;
  }

  setMessage(message?: string, type: "error" | null = null) {
    this.isDirty = true;

    if (message !== undefined) {
      this.showMessage = true;

      if (this.message === undefined) {
        this.message = document.createElement("p");
        this.message.classList.add(styles.message);
      }

      if (type) {
        this.root.classList.add(theme.class[type]);
      } else {
        this.root.classList.remove(theme.class.error);
      }

      this.message.innerText = message;

      if (!this.message.isConnected) {
        this.root.appendChild(this.message);
        // biome-ignore lint/suspicious/noUnusedExpressions: reflow
        this.root.clientWidth;
        this.message.classList.add(theme.class.active);
      }
    } else if (this.message?.isConnected) {
      this.showMessage = false;

      this.message.addEventListener(
        "transitionend",
        () => {
          // biome-ignore lint/suspicious/noUnnecessaryConditions: async
          if (!this.showMessage) {
            this.message?.remove();
          }
        },
        {
          once: true,
        },
      );

      this.message.classList.remove(theme.class.active);
    }
  }

  setValidateOn(validateOn?: typeof this.validateOn) {
    this.isDirty = null;
    this.validateOn = (validateOn || null) as typeof this.validateOn;
  }
}
