import { style } from "@vanilla-extract/css";
import { theme } from "#/styles/theme.ts";

export const content = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0, theme.spacing.inline.md),
  justifyContent: "center",
});

export const styles = { content };
