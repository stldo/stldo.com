import { createAnimation } from "bakeware/animation";
import { breakpoints } from "bakeware/breakpoints";
import { createTransition } from "bakeware/transition";
import { classes } from "./classes.css.ts";
import { layers } from "./layers.css.ts";
import { vars } from "./vars.css.ts";
import { fontSize, spacing as spacingBase } from "./vertical-rhythm.ts";

const spacing: typeof spacingBase = (...args) => spacingBase(...args);

Object.defineProperties(
  spacing,
  Object.keys(vars.spacing).reduce((accumulator, key) => {
    accumulator[key] = {
      get() {
        return vars.spacing[key as keyof typeof vars.spacing];
      },
    };

    return accumulator;
  }, {} as PropertyDescriptorMap),
);

export const theme = {
  ...vars,

  animation: createAnimation(vars.motion.normal),

  breakpoint: breakpoints({
    xs: "360px", // Small phones
    sm: "410px", // Large phones
    ms: "600px", // Small tablets
    md: "960px", // Large tablets
    ml: "1220px", // Small laptops
    lg: "1380px", // Large laptops
    xl: "1860px", // Desktops
  }),

  class: classes,

  fontSize,

  layer: layers,

  spacing: spacing as typeof vars.spacing & typeof spacingBase,

  transition: createTransition(vars.motion.normal),
};
