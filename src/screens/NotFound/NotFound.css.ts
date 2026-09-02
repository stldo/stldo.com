import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

export const root = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});

export const title = style({
  ...theme.font.display[95],
  color: theme.color.text.secondary,
});

export const styles = { root, title };
