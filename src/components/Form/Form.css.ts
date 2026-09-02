import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "#/styles/theme.ts";

export const root = style({
  "@layer": {
    [theme.layer.component]: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.block.ml,
      position: "relative",
    },
  },
});

export const message = style({
  "@layer": {
    [theme.layer.component]: {
      insetBlockStart: calc("100%").add(theme.spacing(4)).toString(),
      opacity: 0,
      position: "absolute",
      transition: theme.transition("opacity").toString(),

      selectors: {
        [`&.${theme.class.active}`]: {
          opacity: 1,
        },

        [`&.${theme.class.error}`]: {
          color: theme.color.error.primary,
        },
      },
    },
  },
});

export const styles = { message, root };
