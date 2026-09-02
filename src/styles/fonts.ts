import { fontFaces } from "./font-faces.css.ts";
import { fontSize } from "./vertical-rhythm.ts";

export const fonts = {
  main: {
    family: `${fontFaces.main}, system-ui, sans-serif`,
    size: {
      s2: fontSize(-3),
      sm: fontSize(-2),
      ms: fontSize(-1),
      md: fontSize(0),
      ml: fontSize(1),
      lg: fontSize(2),
      l2: fontSize(3),
      l3: fontSize(4),
    },
    tracking: {
      md: "0",
      ml: "0.1em",
      lg: "0.2em",
      l2: "0.4em",
    },
    weight: {
      regular: "300",
      bold: "400",
    },
  },
};
