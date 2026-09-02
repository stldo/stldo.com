import { fontFace } from "bakeware/font-face";
import { getAssetUrl } from "#/utils/assets/get-url.ts";

export const fontFaces = {
  main: fontFace([
    {
      fontStyle: "normal",
      fontWeight: "300",
      src: {
        woff: getAssetUrl("fonts/jost-light.woff"),
        woff2: getAssetUrl("fonts/jost-light.woff2"),
      },
    },
    {
      fontStyle: "italic",
      fontWeight: "300",
      src: {
        woff: getAssetUrl("fonts/jost-light-italic.woff"),
        woff2: getAssetUrl("fonts/jost-light-italic.woff2"),
      },
    },
    {
      fontStyle: "normal",
      fontWeight: "400",
      src: {
        woff: getAssetUrl("fonts/jost-regular.woff"),
        woff2: getAssetUrl("fonts/jost-regular.woff2"),
      },
    },
    {
      fontStyle: "italic",
      fontWeight: "400",
      src: {
        woff: getAssetUrl("fonts/jost-italic.woff"),
        woff2: getAssetUrl("fonts/jost-italic.woff2"),
      },
    },
  ]),
};
