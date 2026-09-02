import { style } from "@vanilla-extract/css";
import { fonts } from "#/styles/fonts.ts";
import { theme } from "#/styles/theme.ts";

export const root = style({
  alignItems: "center",
  display: "inline-flex",
  gap: theme.spacing.inline.sm,
  lineHeight: fonts.main.size.l2.lineHeight,
});

export const icon = style({
  blockSize: "1em",
  inlineSize: "1em",
});

export const level = {
  1: style({
    fontSize: fonts.main.size.md.fontSize,
  }),
  2: style({
    fontSize: fonts.main.size.ml.fontSize,
  }),
  3: style({
    fontSize: fonts.main.size.lg.fontSize,
  }),
  4: style({
    fontSize: fonts.main.size.l2.fontSize,
  }),
  5: style({
    fontSize: fonts.main.size.l3.fontSize,
  }),
};

export const styles = { icon, level, root };
