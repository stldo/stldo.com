import pDebounce from "p-debounce";
import { AbortedInputElementValidationError } from "./AbortedInputElementValidationError.ts";

export class InputElementValidation<Response> {
  private abort: (() => void) | null = null;

  private readonly callback: (response: Response) => void;

  private clear() {
    this.abort?.();
    this.abort = null;
    this.debounced = null;
  }

  private currentId: symbol | null = null;

  private debounced: ((value: string) => Promise<void>) | null = null;

  private readonly interval = 250;

  private async validate(value: string) {
    const id = Symbol("id");
    this.currentId = id;

    try {
      const validation = await this.validator(value);
      if (this.currentId === id) {
        this.callback(validation);
      }
    } finally {
      if (this.currentId === id) {
        this.currentId = null;
      }
    }
  }

  private readonly validator: (value: string) => Promise<Response>;

  constructor(
    validator: typeof this.validator,
    callback: typeof this.callback,
  ) {
    this.callback = callback;
    this.validator = validator;
  }

  async debounce(value: string) {
    if (this.debounced === null) {
      const controller = new AbortController();

      this.abort = () => {
        controller.abort(new AbortedInputElementValidationError());
      };

      this.debounced = pDebounce(this.validate, this.interval, {
        signal: controller.signal,
      });
    }

    return await this.debounced(value).catch((error) => {
      if (!(error instanceof AbortedInputElementValidationError)) {
        throw error;
      }
    });
  }

  async now(value: string) {
    this.clear();

    if (!this.currentId) {
      await this.validate(value);
    }
  }
}
