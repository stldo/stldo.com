import { actions, isInputError } from "astro:actions";
import type { InputElement } from "#/components/Input/InputElement.ts";
import { theme } from "#/styles/theme.ts";
import { styles } from "./Form.css.ts";

export class FormElement extends HTMLElement {
  private readonly action: keyof typeof actions;

  private readonly element: HTMLFormElement;

  private readonly fields: HTMLCollectionOf<InputElement>;

  private readonly handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (this.submit) {
      this.submit.disabled = true;
    }

    const formData = new FormData(this.element);
    const { data, error } = await actions[this.action](formData);

    if (!error) {
      for (const field of this.fields) {
        field.setMessage();
        field.element.disabled = true;
      }
      this.setMessage(data);
      return;
    }

    this.submit?.removeAttribute("disabled");

    if (isInputError(error)) {
      for (const field of this.fields) {
        const name = field.element.name as keyof typeof error.fields;
        const message = error.fields[name];

        if (message?.length) {
          field.setMessage(message[0], "error");
        } else {
          field.setMessage();
        }
      }
    } else {
      this.setMessage(error.message, "error");
    }
  };

  private message?: HTMLParagraphElement;

  private showMessage = false;

  private readonly submit?: HTMLButtonElement;

  constructor() {
    super();

    this.action = this.dataset.action as keyof typeof actions;
    this.element = this.previousElementSibling as HTMLFormElement;

    this.fields = this.element.getElementsByTagName(
      "component-input",
    ) as HTMLCollectionOf<InputElement>;

    const submit = this.element.querySelector<HTMLButtonElement>(
      `button[type="submit"]`,
    );

    if (submit) {
      this.submit = submit;
    }
  }

  connectedCallback() {
    const actionFields = this.dataset.actionFields
      ? (JSON.parse(this.dataset.actionFields) as string[])
      : [];

    if (actionFields.length) {
      for (const field of this.fields) {
        if (actionFields.includes(field.element.name)) {
          field.setAction(this.action);
        }
      }
    }

    if (this.dataset.validateOn) {
      for (const field of this.fields) {
        field.setValidateOn(
          this.dataset.validateOn as Parameters<typeof field.setValidateOn>[0],
        );
      }
    }

    this.element.addEventListener("submit", this.handleSubmit);
  }

  disconnectedCallback() {
    this.element.removeEventListener("submit", this.handleSubmit);
  }

  setMessage(message?: string, type: "error" | null = null) {
    if (message !== undefined) {
      this.showMessage = true;

      if (this.message === undefined) {
        this.message = document.createElement("p");
        this.message.classList.add(styles.message);
      }

      if (type) {
        this.message.classList.add(theme.class[type]);
      } else {
        this.message.classList.remove(theme.class.error);
      }

      this.message.innerText = message;

      if (!this.message.isConnected) {
        this.element.appendChild(this.message);
        // biome-ignore lint/suspicious/noUnusedExpressions: reflow
        this.element.clientWidth;
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
}
