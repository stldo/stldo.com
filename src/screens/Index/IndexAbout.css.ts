import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

export const content = style({
  "@media": {
    [theme.breakpoint.sm]: {
      paddingInlineStart: "10%",
    },

    [theme.breakpoint.ms]: {
      paddingInlineStart: "20%",
    },

    [theme.breakpoint.md]: {
      paddingInlineStart: "30%",
    },
  },
});

export const styles = { content };
