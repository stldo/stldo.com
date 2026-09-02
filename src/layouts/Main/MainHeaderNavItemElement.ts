import { layout } from "#/store/layout.ts";
import { TransitionManager } from "#/utils/dom/transition-manager.ts";
import { styles } from "./MainHeaderNavItem.css.ts";

export class MainHeaderNavItemElement extends HTMLElement {
  private readonly slug?: string;

  private readonly transitionManager: TransitionManager;

  private unsubscribe?: () => void;

  constructor() {
    super();
    this.slug = this.dataset.slug;
    this.transitionManager = new TransitionManager(this, {
      enter: styles.enter,
      exit: styles.exit,
    });
  }

  connectedCallback() {
    this.unsubscribe = layout.subscribe(({ currentSection }) => {
      this.transitionManager.toggle(this.slug === currentSection);
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }
}
