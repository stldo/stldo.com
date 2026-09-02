import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

const root = style({
  marginBlockStart: theme.spacing.block.lg,

  "@media": {
    [theme.breakpoint.ms]: {
      marginBlockStart: theme.spacing.block.l2,
    },
  },
});

const alignment = {
  center: style({
    textAlign: "center",
  }),

  end: style({
    textAlign: "end",
  }),
};

const primary = {
  content: style({
    marginBlockStart: theme.spacing.block.ml,

    "@media": {
      [theme.breakpoint.ms]: {
        marginBlockStart: theme.spacing.block.lg,
      },
    },
  }),

  title: style({
    ...theme.font.display[90],
    color: theme.color.text.secondary,
    textTransform: "uppercase",
  }),
};

const secondary = {
  content: style({
    marginBlockStart: theme.spacing.block.ml,
  }),

  title: style([
    primary.title,
    {
      ...theme.font.display[80],
    },
  ]),
};

const subtitle = style({
  color: theme.color.text.secondary,
  marginBlockStart: theme.spacing.block.md,
});

export const styles = { root, alignment, primary, secondary, subtitle };
