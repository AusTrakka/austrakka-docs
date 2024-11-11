export function getGlobalStyles(
  colourPrimary: string,
  colourPrimaryDark: string,
  colourPrimaryDarker: string,
  colourPrimaryDarkest: string,
  colourPrimaryLight: string,
  colourPrimaryLighter: string,
  colourPrimaryLightest: string,
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
    },
  }
}
