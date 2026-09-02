import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

const root = style({
  "@layer": {
    [theme.layer.component]: {
      ...theme.font.label[30],
      alignItems: "center",
      border: 0,
      display: "inline-flex",
      gap: theme.spacing.inline.sm,
      justifyContent: "center",
      textTransform: "uppercase",
      userSelect: "none",
    },
  },
});

const plain = style({
  "@layer": {
    [theme.layer.component]: {
      background: "none",
      color: theme.color.label.primary,
      textDecorationColor: "transparent",
      transition: theme
        .transition("text-decoration-color", theme.motion.fast)
        .toString(),

      selectors: {
        "&:hover": {
          textDecorationColor: "currentcolor",
        },

        "&[disabled]": {
          color: theme.color.label.disabled,
        },
      },
    },
  },
});

const standard = style({
  "@layer": {
    [theme.layer.component]: {
      background: theme.color.accent.main,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadow.md,
      color: theme.color.accent.text,
      overflow: "hidden",
      padding: theme.spacing.inset.squish.md,
      position: "relative",
      textDecoration: "none",
      transition: theme
        .transition("background", "color", theme.motion.fast)
        .toString(),

      selectors: {
        "&:hover": {
          background: theme.color.accent.hover,
        },

        "&[disabled]": {
          background: theme.color.accent.disabled.main,
          color: theme.color.accent.disabled.text,
          cursor: "default",
          pointerEvents: "none",
        },
      },
    },
  },
});

const icon = style({
  "@layer": {
    [theme.layer.component]: {
      blockSize: ["1lh", theme.spacing(4)],
      inlineSize: ["1lh", theme.spacing(4)],
    },
  },
});

export const styles = { icon, root, plain, standard };
