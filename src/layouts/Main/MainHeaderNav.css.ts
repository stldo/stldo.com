import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

export const root = style({
  "@layer": {
    [theme.layer.layout]: {
      ...theme.font.label[70],
      alignItems: "center",
      display: "flex",
      gap: theme.spacing.inline.sm,
      inlineSize: "100%",
      position: "relative",

      "@media": {
        [theme.breakpoint.not.ms]: {
          selectors: {
            "&::before": {
              content: " ", // 🫤
            },
          },
        },
      },
    },
  },
});

export const styles = { root };
