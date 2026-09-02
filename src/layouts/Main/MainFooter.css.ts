import { globalStyle, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { alpha } from "bakeware/alpha";
import { theme } from "#/styles/theme.ts";

export const root = style({
  "@layer": {
    [theme.layer.layout]: {
      background: theme.color.surface.secondary,
      color: theme.color.text.tertiary,
      paddingBlock: theme.spacing.block.md,

      "@media": {
        [theme.breakpoint.md]: {
          marginBlockStart: calc(theme.spacing.block.l2)
            .divide(2)
            .multiply(-1)
            .toString(),
          paddingBlockStart: theme.spacing(
            calc(theme.spacing.block.l2)
              .divide(2)
              .add(theme.spacing.block.md)
              .toString(),
          ),
          position: "relative",

          selectors: {
            "&::before": {
              background: theme.color.surface.primary,
              blockSize: calc(theme.spacing.block.l2).divide(2).toString(),
              boxShadow: theme.shadow.sm,
              content: "",
              insetBlockStart: 0,
              insetInline: 0,
              margin: "0 auto",
              maxInlineSize: calc(theme.size.inline.md)
                .subtract(calc(theme.spacing.inline.md).multiply(2))
                .toString(),
              position: "absolute",
            },

            "&::after": {
              background:
                "linear-gradient(" +
                `${alpha(theme.color.surface.secondary, 1)}` +
                ` ${theme.spacing(4)}` +
                `, ${alpha(theme.color.surface.secondary, 0)}` +
                ")",
              blockSize: calc(theme.spacing.block.l2)
                .divide(2)
                .add(theme.spacing(4))
                .toString(),
              content: "",
              insetBlockStart: theme.spacing(-4),
              insetInline: 0,
              position: "absolute",
            },
          },
        },
      },
    },
  },
});

globalStyle(`${root} p`, {
  "@layer": {
    [theme.layer.layout]: {
      textAlign: "center",
      whiteSpace: "pre-line",
    },
  },
});

export const styles = { root };
