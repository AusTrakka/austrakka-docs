import fs from 'fs';
import path from 'path';
import {EnvConfig} from 'src/config/siteConfig';

enum EnvConfigVars {
  azureClientId = "AT_DOCS_AT_CLIENT_ID",
  azureTenantId = "AT_DOCS_AT_TENANT_ID",
  brandingName = "AT_DOCS_BRANDING_NAME",
  brandingTagline1 = "AT_DOCS_BRANDING_TAGLINE_1",
  brandingTagline2 = "AT_DOCS_BRANDING_TAGLINE_2",
  logo = "AT_DOCS_LOGO_PATH",
  logoSmall = "AT_DOCS_LOGO_SMALL_PATH",
  colourPrimary = "AT_DOCS_THEME_PRIMARY",
  colourPrimaryDark = "AT_DOCS_THEME_PRIMARY_DARK",
  colourPrimaryDarker = "AT_DOCS_THEME_PRIMARY_DARKER",
  colourPrimaryDarkest = "AT_DOCS_THEME_PRIMARY_DARKEST",
  colourPrimaryLight = "AT_DOCS_THEME_PRIMARY_LIGHT",
  colourPrimaryLighter = "AT_DOCS_THEME_PRIMARY_LIGHTER",
  colourPrimaryLightest = "AT_DOCS_THEME_PRIMARY_LIGHTEST",
  colourBackground = "AT_DOCS_THEME_BACKGROUND",
  colourSecondaryTeal = "AT_DOCS_THEME_SECONDARY_TEAL",
  colourPrimaryGrey200 = "AT_DOCS_THEME_PRIMARY_GREY_200",
  colourSecondaryMain = "AT_DOCS_THEME_SECONDARY_MAIN",
  siteUrl = "AT_DOCS_SITE_URL",
}

const customLogoDir : string = path.join(__dirname, 'static', 'img')

export function getEnvConfig() : EnvConfig {
  return {
    azureClientId: assertNotEmpty(EnvConfigVars.azureClientId, process.env[EnvConfigVars.azureClientId]),
    azureTenantId: assertNotEmpty(EnvConfigVars.azureTenantId, process.env[EnvConfigVars.azureTenantId]),
    brandingName: defaultConfigValue(EnvConfigVars.brandingName, process.env[EnvConfigVars.brandingName], BrandingDefaultValues.Name),
    brandingTagline1: defaultConfigValue(EnvConfigVars.brandingTagline1, process.env[EnvConfigVars.brandingTagline1], BrandingDefaultValues.Tagline1),
    brandingTagline2: defaultConfigValue(EnvConfigVars.brandingTagline2, process.env[EnvConfigVars.brandingTagline2], BrandingDefaultValues.Tagline2),
    logo: defaultCustomLogoValue(EnvConfigVars.logo, process.env[EnvConfigVars.logo], LogoDefaultValues.Logo),
    logoSmall: defaultCustomLogoValue(EnvConfigVars.logoSmall, process.env[EnvConfigVars.logoSmall], LogoDefaultValues.LogoSmall),
    colourPrimary: defaultConfigValue(EnvConfigVars.colourPrimary, process.env[EnvConfigVars.colourPrimary], ColourDefaultValues.primary),
    colourPrimaryDark: defaultConfigValue(EnvConfigVars.colourPrimaryDark, process.env[EnvConfigVars.colourPrimaryDark], ColourDefaultValues.primaryDark),
    colourPrimaryDarker: defaultConfigValue(EnvConfigVars.colourPrimaryDarker, process.env[EnvConfigVars.colourPrimaryDarker], ColourDefaultValues.primaryDarker),
    colourPrimaryDarkest: defaultConfigValue(EnvConfigVars.colourPrimaryDarkest, process.env[EnvConfigVars.colourPrimaryDarkest], ColourDefaultValues.primaryDarkest),
    colourPrimaryLight: defaultConfigValue(EnvConfigVars.colourPrimaryLight, process.env[EnvConfigVars.colourPrimaryLight], ColourDefaultValues.primaryLight),
    colourPrimaryLighter: defaultConfigValue(EnvConfigVars.colourPrimaryLighter, process.env[EnvConfigVars.colourPrimaryLighter], ColourDefaultValues.primaryLighter),
    colourPrimaryLightest: defaultConfigValue(EnvConfigVars.colourPrimaryLightest, process.env[EnvConfigVars.colourPrimaryLightest], ColourDefaultValues.primaryLightest),
    colourBackground: defaultConfigValue(EnvConfigVars.colourBackground, process.env[EnvConfigVars.colourBackground], ColourDefaultValues.background),
    colourSecondaryTeal: defaultConfigValue(EnvConfigVars.colourSecondaryTeal, process.env[EnvConfigVars.colourSecondaryTeal], ColourDefaultValues.secondaryTeal),
    colourPrimaryGrey200: defaultConfigValue(EnvConfigVars.colourPrimaryGrey200, process.env[EnvConfigVars.colourPrimaryGrey200], ColourDefaultValues.primaryGrey200),
    colourSecondaryMain: defaultConfigValue(EnvConfigVars.colourSecondaryMain, process.env[EnvConfigVars.colourSecondaryMain], ColourDefaultValues.secondaryMain),
    siteUrl: defaultConfigValue(EnvConfigVars.siteUrl, process.env[EnvConfigVars.siteUrl], SiteDefaultValues.SiteUrl),
  };
}

function defaultCustomLogoValue(key: string, value: string | undefined, defaultValue: string) {
  value = defaultConfigValue(key, value, defaultValue);
  const logoPath: string = path.join(customLogoDir, value);
  if (!fs.existsSync(logoPath)) {
    throw new Error(`Custom logo at ${logoPath} does not exist`);
  }
  return value;
}

function defaultConfigValue(key: string, value: string | undefined, defaultValue: string): string {
  if (!value) {
    console.warn(`Defaulting ${key} value to ${defaultValue}`)
    value = defaultValue
  }
  return value
}

function assertNotEmpty(key: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Value for ${key} must not be empty`)
  }
  return value
}

enum LogoDefaultValues {
  Logo = "AusTrakka_Logo_cmyk.png",
  LogoSmall = "AusTrakka_Logo_only_cmyk.png",
}

enum BrandingDefaultValues {
  Name = "AusTrakka",
  Tagline1 = "From genomics to public health decisions for Australia",
  Tagline2 = "Combining Genomics & Epidemiological Data",
}

enum ColourDefaultValues {
  primary = "#0a3546",
  primaryDark = "#43a047",
  primaryDarker = "#2e7d32",
  primaryDarkest = "#1b5e20",
  primaryLight = "#a5d6a7",
  primaryLighter = "#c8e6c9",
  primaryLightest = "#e8f5e9",
  background = '#FFFFFF',
  secondaryTeal = '#3E7784',
  primaryGrey200 = '#eeeeee',
  secondaryMain = '#90CA6D',
}

enum SiteDefaultValues {
  SiteUrl = "https://docs.austrakka.net"
}
