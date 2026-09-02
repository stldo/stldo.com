import { style } from "@vanilla-extract/css";
import { globalStyles } from "bakeware/global-styles";
import { normalize } from "bakeware/normalize";
import { theme } from "#/styles/theme.ts";

normalize(theme.layer.base);

globalStyles({
  "@layer": {
    [theme.layer.layout]: {
      [`${theme.class.freeze} *` +
        `, ${theme.class.freeze} *::before` +
        `, ${theme.class.freeze} *::after`]: {
        transition: "none !important",
      },

      "h1, h2, h3, h4, h5, h6": {
        fontSize: "inherit",
        fontWeight: "inherit",
      },

      "p + p": {
        marginBlockStart: theme.spacing(4),
      },

      a: {
        color: "inherit",
      },
    },
  },
});

export const body = style({
  "@layer": {
    [theme.layer.layout]: {
      ...theme.font.body,
      background: theme.color.surface.primary,
      cursor: "default",
      display: "flex",
      flexDirection: "column",
    },
  },
});

export const styles = { body };
