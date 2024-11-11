import fs from 'fs';
import path from 'path';

interface EnvConfig {
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
}

enum EnvConfigVars {
  azureClientId = "AT_DOCS_AT_CLIENT_ID",
  azureTenantId = "AT_DOCS_AT_TENANT_ID",
  brandingName = "AT_DOCS_BRANDING_NAME",
  brandingTagline1 = "AT_DOCS_BRANDING_TAGLINE_1",
  brandingTagline2 = "AT_DOCS_BRANDING_TAGLINE_2",
  logo = "AT_DOCS_LOGO_PATH",
  logoSmall = "AT_DOCS_LOGO_SMALL_PATH",
  colourPrimary = "AT_DOCS_COLOUR_PRIMARY",
  colourPrimaryDark = "AT_DOCS_COLOUR_PRIMARY_DARK",
  colourPrimaryDarker = "AT_DOCS_COLOUR_PRIMARY_DARKER",
  colourPrimaryDarkest = "AT_DOCS_COLOUR_PRIMARY_DARKEST",
  colourPrimaryLight = "AT_DOCS_COLOUR_PRIMARY_LIGHT",
  colourPrimaryLighter = "AT_DOCS_COLOUR_PRIMARY_LIGHTER",
  colourPrimaryLightest = "AT_DOCS_COLOUR_PRIMARY_LIGHTEST",
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
    colourPrimary: defaultConfigValue(EnvConfigVars.colourPrimary, process.env[EnvConfigVars.colourPrimary], ColourDefaultValues.ColourPrimary),
    colourPrimaryDark: defaultConfigValue(EnvConfigVars.colourPrimaryDark, process.env[EnvConfigVars.colourPrimaryDark], ColourDefaultValues.ColourPrimaryDark),
    colourPrimaryDarker: defaultConfigValue(EnvConfigVars.colourPrimaryDarker, process.env[EnvConfigVars.colourPrimaryDarker], ColourDefaultValues.ColourPrimaryDarker),
    colourPrimaryDarkest: defaultConfigValue(EnvConfigVars.colourPrimaryDarkest, process.env[EnvConfigVars.colourPrimaryDarkest], ColourDefaultValues.ColourPrimaryDarkest),
    colourPrimaryLight: defaultConfigValue(EnvConfigVars.colourPrimaryLight, process.env[EnvConfigVars.colourPrimaryLight], ColourDefaultValues.ColourPrimaryLight),
    colourPrimaryLighter: defaultConfigValue(EnvConfigVars.colourPrimaryLighter, process.env[EnvConfigVars.colourPrimaryLighter], ColourDefaultValues.ColourPrimaryLighter),
    colourPrimaryLightest: defaultConfigValue(EnvConfigVars.colourPrimaryLightest, process.env[EnvConfigVars.colourPrimaryLightest], ColourDefaultValues.ColourPrimaryLightest),
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
  ColourPrimary = "#0a3546",
  ColourPrimaryDark = "#43a047",
  ColourPrimaryDarker = "#2e7d32",
  ColourPrimaryDarkest = "#1b5e20",
  ColourPrimaryLight = "#a5d6a7",
  ColourPrimaryLighter = "#c8e6c9",
  ColourPrimaryLightest = "#e8f5e9",
}
