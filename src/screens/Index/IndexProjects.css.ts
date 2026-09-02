import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "#/styles/theme.ts";

const halfXsStroke = calc(theme.stroke.xs).divide(2);

export const deprecated = style({
  display: "inline",
  backgroundImage:
    "linear-gradient(" +
    `transparent ${calc("50%").subtract(halfXsStroke)}` +
    `, currentcolor ${calc("50%").subtract(halfXsStroke)}` +
    ` ${calc("50%").add(halfXsStroke)}` +
    `, transparent ${calc("50%").add(halfXsStroke)}` +
    ")",
  backgroundRepeat: "repeat-y",
  backgroundSize: ["100% 1lh", `100% ${theme.spacing(4)}`],
});

export const items = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.block.md,
  marginBlockStart: theme.spacing.block.md,
  padding: 0,
});

export const item = {
  root: style({
    display: "block",
  }),

  anchor: style({
    color: theme.color.text.primary,
    textDecorationColor: "transparent",
    transition: theme
      .transition("text-decoration-color", theme.motion.fast)
      .toString(),

    selectors: {
      "&:hover": {
        textDecorationColor: "currentcolor",
      },
    },
  }),

  label: style({
    ...theme.font.label[70],
    color: theme.color.text.secondary,
    display: "inline",
    textDecoration: "underline",
    textDecorationColor: "currentcolor",
  }),
};

export const title = style({
  display: "inline-block",
  marginBlockStart: theme.spacing.block.ml,
});

export const styles = { deprecated, item, items, title };
