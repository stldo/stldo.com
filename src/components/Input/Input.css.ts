import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "#/styles/theme.ts";

export const root = style({
  "@layer": {
    [theme.layer.component]: {
      ...theme.font.label[30],
      color: theme.color.label.primary,
      display: "flex",
      flexDirection: "column",
      inlineSize: "100%",
      position: "relative",
      textAlign: "start",
      textTransform: "uppercase",

      selectors: {
        "&:has([disabled])": {
          color: theme.color.label.disabled,
          cursor: "default",
          pointerEvents: "none",
        },
      },
    },
  },
});

export const field = style({
  "@layer": {
    [theme.layer.component]: {
      ...theme.font.field,
      background: theme.color.field.main,
      border: 0,
      borderBlockEnd: `${theme.stroke.xs} solid ${theme.color.stroke.primary}`,
      borderRadius: 0,
      color: theme.color.field.text,
      inlineSize: "100%",
      outline: 0,
      padding: 0,
      transition: theme
        .transition(
          "border-color",
          "color",
          "-webkit-text-fill-color",
          theme.motion.fast,
        )
        .toString(),

      selectors: {
        ["&:-webkit-autofill" +
          ", &:-webkit-autofill:active" +
          ", &:-webkit-autofill:focus" +
          ", &:-webkit-autofill:hover"]: {
          WebkitTextFillColor: `${theme.color.field.text} !important`,
          WebkitBoxShadow:
            "0 0 0em 1000000em" +
            ` ${theme.color.field.main}` +
            " inset !important",
        },

        "&[disabled]": {
          borderColor: theme.color.stroke.disabled,
          color: theme.color.field.disabled.text,
          cursor: "default",
          pointerEvents: "none",
        },

        ["&[disabled]:-webkit-autofill" +
          ", &[disabled]:-webkit-autofill:active" +
          ", &[disabled]:-webkit-autofill:focus" +
          ", &[disabled]:-webkit-autofill:hover"]: {
          WebkitTextFillColor: `${theme.color.field.disabled.text} !important`,
        },
      },
    },
  },
});

export const message = style({
  "@layer": {
    [theme.layer.component]: {
      ...theme.font.body,
      insetBlockStart: "100%",
      opacity: 0,
      position: "absolute",
      textTransform: "none",
      transition: theme.transition("opacity").toString(),

      selectors: {
        [`&.${theme.class.active}`]: {
          opacity: 1,
        },

        [`.${theme.class.error} &`]: {
          color: theme.color.error.primary,
        },
      },
    },
  },
});

export const textarea = style({
  "@layer": {
    [theme.layer.component]: {
      backgroundImage:
        "linear-gradient(" +
        `${theme.color.field.main}, ${theme.color.field.main}` +
        "), " +
        "linear-gradient(" +
        `${theme.color.stroke.secondary}, ` +
        `${theme.color.field.main} ${theme.stroke.xs}` +
        ")",
      backgroundPosition: `0 ${calc(theme.stroke.xs).multiply(-1)}, 0 0`,
      backgroundRepeat: "repeat-x, repeat",
      backgroundSize:
        `${theme.stroke.xs} ${theme.font.field.lineHeight}, ` +
        `${theme.stroke.xs} ${theme.font.field.lineHeight}`,
      minBlockSize: theme.spacing(12),
      resize: "none",
    },
  },
});

export const styles = { field, message, root, textarea };
