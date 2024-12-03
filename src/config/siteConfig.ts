import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export interface EnvConfig {
  azureClientId: string,
  azureTenantId: string,
  brandingName: string,
  brandingTagline1: string,
  brandingTagline2: string,
  logo: string,
  logoSmall: string,
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
  siteUrl: string,
}

export function useEnvConfig() : EnvConfig {
  const { siteConfig } = useDocusaurusContext();
  return siteConfig.customFields as EnvConfig;
}
