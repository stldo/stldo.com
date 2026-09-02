import { style } from "@vanilla-extract/css";

export const classes = {
  active: style({}),

  body: {
    scroll: {
      active: style({}),
      down: style({}),
    },
  },

  error: style({}),

  fillVh: style({
    minBlockSize: ["100vh", "100dvh"],
  }),

  freeze: style({}),
};
