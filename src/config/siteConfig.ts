import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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
  siteUrl: string,
}

export function getEnvConfig() : EnvConfig {

  const {siteConfig} = useDocusaurusContext();
  return siteConfig.customFields as EnvConfig
}