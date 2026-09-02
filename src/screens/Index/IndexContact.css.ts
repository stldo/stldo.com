import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

export const form = style({
  margin: "0 auto",
  maxInlineSize: theme.size.inline.sm,
});

export const styles = { form };
