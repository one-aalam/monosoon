import {
    gray,
    blue,
    red,
    green,
    grayDark,
    blueDark,
    redDark,
    greenDark,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
        primary: "#1EB854",
        secondary: "#1FD65F",
        accent: "#D99330",
        neutral: "#110E0E",
        base100: "#171212",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
    media: {
      bp1: '(min-width: 480px)',
    },
    utils: {
      marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
    },
});

export const themeUno = createTheme({});

const darkTheme = createTheme({
    colors: {
      ...grayDark,
      ...blueDark,
      ...redDark,
      ...greenDark,
    },
});
