import React, { ReactNode } from 'react';

import { PublicClientApplication, EventType, EventMessage, AuthenticationResult } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { getMsalConfig } from '@site/src/config/authConfig';
import {getGlobalStyles, getTheme} from "@site/src/theme/Theme";
import {GlobalStyles, ThemeProvider} from "@mui/material";
import {getEnvConfig} from "@site/src/config/siteConfig";
import {Login} from "@site/src/components/Login/Login";

interface RootProps {
  children: ReactNode;
}

// TODO: this needs to handle selecting account
// Default implementation, that you can customize
export default function Root({children}: RootProps) {
    const config = getEnvConfig();
    
    const msalConfig = getMsalConfig(
      config.azureClientId as string,
      config.azureTenantId as string
    )

    const msalInstance = new PublicClientApplication(msalConfig);

    // Listen for sign-in event and set active account
    msalInstance.addEventCallback((event: EventMessage) => {
      if (event.payload) {
        const payload = event.payload as AuthenticationResult;
        const { account } = payload;
        if (event.eventType === EventType.LOGIN_SUCCESS) {
          msalInstance.setActiveAccount(account);
        }
      }
    });

    return (
      <>
        <ThemeProvider theme={getTheme(
          config.colourPrimary,
          config.colourPrimary,
          config.colourPrimary,
        )}>
          <GlobalStyles styles={getGlobalStyles(
            config.colourPrimary,
            config.colourPrimaryDark,
            config.colourPrimaryDarker,
            config.colourPrimaryDarkest,
            config.colourPrimaryLight,
            config.colourPrimaryLighter,
            config.colourPrimaryLightest,
            config.colourBackground,
            config.colourSecondaryTeal,
            config.colourPrimaryGrey200,
            config.colourSecondaryMain,
          )} />
          <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
              <>{children}</>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <Login/>
            </UnauthenticatedTemplate>
          </MsalProvider>
        </ThemeProvider>
      </>
    );
}
