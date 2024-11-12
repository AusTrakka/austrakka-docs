import {createTheme, ThemeOptions} from "@mui/material";

export function getTheme(
  primaryColour: string, 
  secondaryColour: string, 
  backgroundColour: string
): ThemeOptions {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: primaryColour,
      },
      secondary: {
        main: secondaryColour,
      },
      background: {
        // @ts-ignore
        main: backgroundColour,
      },
    },
    typography: {
      h1: {
        fontSize: '3.6rem',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '1.5rem',
      },
      h4: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
      },
      h5: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
      },
    },
  })
}

export function getGlobalStyles(
  colourPrimary: string,
  colourPrimaryDark: string,
  colourPrimaryDarker: string,
  colourPrimaryDarkest: string,
  colourPrimaryLight: string,
  colourPrimaryLighter: string,
  colourPrimaryLightest: string,
  colourBackground: string,
  colourSecondaryTeal: string,
  colourPrimaryGrey200: string,
  colourSecondaryMain: string,
) {
  return {
    ':root': {
      // austrakka
      '--ifm-color-primary': colourPrimary,
      '--ifm-color-primary-dark': colourPrimaryDark,
      '--ifm-color-primary-darker': colourPrimaryDarker,
      '--ifm-color-primary-darkest': colourPrimaryDarkest,
      '--ifm-color-primary-light': colourPrimaryLight,
      '--ifm-color-primary-lighter': colourPrimaryLighter,
      '--ifm-color-primary-lightest': colourPrimaryLightest,
      '--background-colour': colourBackground,
      '--secondary-teal': colourSecondaryTeal,
      '--primary-grey-200': colourPrimaryGrey200,
      '--secondary-main': colourSecondaryMain,
    },
  }
}
