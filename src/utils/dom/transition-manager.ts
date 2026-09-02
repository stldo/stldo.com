export class TransitionManager {
  private readonly classNames: { enter: string; exit: string };

  private readonly element: HTMLElement;

  private lastId = 0;

  constructor(element: HTMLElement, classNames: typeof this.classNames) {
    this.classNames = { ...classNames };
    this.element = element;
  }

  enter() {
    this.element.classList.remove(this.classNames.exit);
    this.element.classList.add(this.classNames.enter);
  }

  exit() {
    const id = ++this.lastId;

    this.element.classList.remove(this.classNames.enter);
    this.element.classList.add(this.classNames.exit);

    this.element.addEventListener(
      "transitionend",
      () => {
        if (id === this.lastId) {
          this.element.classList.remove(this.classNames.exit);
        }
      },
      { once: true },
    );
  }

  toggle(value: boolean) {
    if (value) {
      this.enter();
    } else if (this.element.classList.contains(this.classNames.enter)) {
      this.exit();
    }
  }
}
