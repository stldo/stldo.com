import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

export const root = style({
  "@layer": {
    [theme.layer.layout]: {
      transition: theme.transition("color", "opacity", "transform").toString(),

      selectors: {
        "&::before": {
          content: ": ",
        },
      },

      "@media": {
        [theme.breakpoint.not.ms]: {
          color: theme.color.label.primary,
          opacity: 0,
          position: "absolute",
          transform: `translateY(${theme.spacing(-2)})`,

          selectors: {
            [`.${theme.class.body.scroll.down} &`]: {
              transform: `translateY(${theme.spacing(2)})`,
            },
          },
        },

        [theme.breakpoint.ms]: {
          color: theme.color.label.disabled,
        },
      },
    },
  },
});

export const enter = style({
  "@layer": {
    [theme.layer.layout]: {
      "@media": {
        [theme.breakpoint.not.ms]: {
          transform: "translateY(0)",

          selectors: {
            [`.${theme.class.body.scroll.active} &`]: {
              opacity: 1,
            },
          },
        },

        [theme.breakpoint.ms]: {
          selectors: {
            [`.${theme.class.body.scroll.active} &`]: {
              color: theme.color.label.primary,
            },
          },
        },
      },
    },
  },
});

export const exit = style({
  "@layer": {
    [theme.layer.layout]: {
      "@media": {
        [theme.breakpoint.not.ms]: {
          opacity: 0,
          transform: `translateY(${theme.spacing(2)})`,

          selectors: {
            [`.${theme.class.body.scroll.down} &`]: {
              transform: `translateY(${theme.spacing(-2)})`,
            },
          },
        },
      },
    },
  },
});

export const styles = { enter, exit, root };
