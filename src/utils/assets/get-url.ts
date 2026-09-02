export function getAssetUrl(path: string) {
  return new URL(`../../assets/${path}`, import.meta.url).pathname;
}
