import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "#/styles/theme.ts";

export const root = style({
  "@layer": {
    [theme.layer.layout]: {
      inlineSize: "100%",
      insetBlockStart: 0,
      position: "sticky",
      zIndex: theme.zIndex.docked,

      "@media": {
        [theme.breakpoint.not.md]: {
          paddingInline: 0,
        },

        [theme.breakpoint.md]: {
          display: "flex",
        },
      },
    },
  },
});

export const content = style({
  "@layer": {
    [theme.layer.layout]: {
      alignItems: "baseline",
      background: theme.color.surface.primary,
      display: "flex",
      gap: theme.spacing.inline.ms,
      padding: theme.spacing(2, theme.spacing.inline.md),
      transition: theme.transition("background", "box-shadow").toString(),

      selectors: {
        [`${theme.class.body.scroll.active} &`]: {
          background: theme.color.surface.tertiary,
          boxShadow: theme.shadow.sm,
        },
      },

      "@media": {
        [theme.breakpoint.md]: {
          alignSelf: "start",
          borderEndStartRadius: theme.radius.md,
          borderEndEndRadius: theme.radius.md,
        },
      },
    },
  },
});

export const logo = style({
  "@layer": {
    [theme.layer.layout]: {
      ...theme.font.logo,
      color: theme.color.brand.primary,
      marginInlineEnd: calc(theme.font.logo.letterSpacing)
        .multiply(-1)
        .toString(),
      userSelect: "none",
    },
  },
});

export const styles = { content, logo, root };
