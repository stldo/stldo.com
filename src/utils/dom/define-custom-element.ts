export function defineCustomElement(
  name: string,
  elementConstructor: CustomElementConstructor,
  options?: ElementDefinitionOptions,
) {
  if (!globalThis.customElements.get(name)) {
    globalThis.customElements.define(name, elementConstructor, options);
  }
}
