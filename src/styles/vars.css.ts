import { alpha } from "bakeware/alpha";
import { createTheme } from "bakeware/create-theme";
import { colors } from "./colors.ts";
import { fonts } from "./fonts.ts";
import { spacing } from "./vertical-rhythm.ts";

export const [className, vars] = createTheme({
  color: {
    accent: {
      disabled: {
        main: colors.gray[1],
        text: colors.gray[20],
      },
      hover: colors.gray[2],
      main: colors.gray[0],
      text: colors.gray[80],
    },
    brand: {
      primary: colors.gray[100],
      secondary: colors.gray[0],
    },
    error: {
      primary: colors.error[50],
    },
    field: {
      disabled: {
        text: colors.gray[20],
      },
      main: colors.gray[1],
      text: colors.gray[100],
    },
    label: {
      disabled: colors.gray[20],
      primary: colors.gray[80],
    },
    stroke: {
      disabled: colors.gray[20],
      primary: colors.gray[80],
      secondary: colors.gray[20],
    },
    surface: {
      primary: colors.gray[1],
      secondary: colors.gray[2],
      tertiary: colors.gray[0],
    },
    text: {
      primary: colors.gray[100],
      secondary: colors.gray[80],
      tertiary: colors.gray[60],
    },
  },

  font: {
    body: {
      ...fonts.main.size.md,
      fontFamily: fonts.main.family,
      fontWeight: fonts.main.weight.regular,
      letterSpacing: fonts.main.tracking.md,
    },
    display: {
      80: {
        ...fonts.main.size.lg,
        fontWeight: fonts.main.weight.bold,
        letterSpacing: fonts.main.tracking.ml,
      },
      90: {
        ...fonts.main.size.l2,
        fontWeight: fonts.main.weight.bold,
        letterSpacing: fonts.main.tracking.ml,
      },
      95: {
        ...fonts.main.size.l3,
        fontWeight: fonts.main.weight.bold,
        letterSpacing: fonts.main.tracking.ml,
      },
    },
    field: {
      ...fonts.main.size.md,
      fontWeight: fonts.main.weight.bold,
      letterSpacing: fonts.main.tracking.md,
    },
    label: {
      30: {
        ...fonts.main.size.md,
        fontWeight: fonts.main.weight.regular,
        letterSpacing: fonts.main.tracking.lg,
      },
      70: {
        ...fonts.main.size.md,
        fontWeight: fonts.main.weight.bold,
        letterSpacing: fonts.main.tracking.md,
      },
    },
    logo: {
      ...fonts.main.size.l2,
      fontWeight: fonts.main.weight.bold,
      letterSpacing: fonts.main.tracking.l2,
    },
  },

  motion: {
    normal: {
      duration: "300ms",
      easingFunction: "ease-in-out",
    },
    fast: {
      duration: "150ms",
      easingFunction: "ease-in-out",
    },
  },

  radius: {
    md: spacing(1),
  },

  shadow: {
    sm: `${spacing(0, 0.5, 0.75)} ${alpha(colors.gray[100], 0.1)}`,
    md: `${spacing(0, 0.5, 0.75)} ${alpha(colors.gray[100], 0.2)}`,
  },

  size: {
    inline: {
      sm: spacing(120),
      md: spacing(160),
    },
  },

  spacing: {
    block: {
      md: spacing(4),
      ml: spacing(8),
      lg: spacing(12),
      l2: spacing(24),
    },
    inline: {
      sm: spacing(1),
      ms: spacing(2),
      md: spacing(4),
    },
    inset: {
      bleed: spacing(0),
      sm: spacing(2),
      ms: spacing(3),
      md: spacing(4),
      squish: {
        md: spacing(2, 4),
      },
      strech: {
        md: spacing(4, 2),
      },
    },
  },

  stroke: {
    xs: spacing(0.125),
  },

  zIndex: {
    hide: "-1",
    base: "0",
    docked: "100",
    overlay: "200",
    modal: "300",
    priority: "400",
  },
});
