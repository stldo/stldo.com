import { layout } from "#/store/layout.ts";

export class IndexSectionElement extends HTMLElement {
  private observer?: IntersectionObserver;

  private readonly slug?: string;

  constructor() {
    super();
    this.slug = this.dataset.slug;
  }

  connectedCallback() {
    const { slug } = this;

    if (!slug) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            layout.set({ currentSection: slug });
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    this.observer.observe(this);
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }
}
