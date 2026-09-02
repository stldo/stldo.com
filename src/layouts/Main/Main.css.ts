import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

export const main = style({
  "@layer": {
    [theme.layer.layout]: {
      boxShadow: theme.shadow.sm,
      flex: 1,
      isolation: "isolate",
      paddingBlockEnd: theme.spacing.block.lg,

      "@media": {
        [theme.breakpoint.ms]: {
          paddingBlockEnd: theme.spacing.block.l2,
        },

        [theme.breakpoint.md]: {
          boxShadow: "none",
        },
      },
    },
  },
});

export const styles = { main };
