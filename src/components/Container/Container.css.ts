import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

const root = style({
  "@layer": {
    [theme.layer.component]: {
      marginInline: "auto",
      maxInlineSize: theme.size.inline.md,
      paddingInline: theme.spacing.inline.md,
    },
  },
});

export const styles = { root };
