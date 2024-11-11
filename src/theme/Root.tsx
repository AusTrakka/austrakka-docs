import React, { ReactNode } from 'react';

import { PublicClientApplication, EventType, EventMessage, AuthenticationResult } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { getMsalConfig } from '@site/src/config/authConfig';
import {getGlobalStyles} from "@site/src/theme/Theme";
import {GlobalStyles} from "@mui/material";
import {getEnvConfig} from "@site/src/config/siteConfig";

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

    const activeAccount = msalInstance.getActiveAccount();
    const claims = activeAccount ? activeAccount.idTokenClaims : null;

    const handleRedirect = () => {
        //instance.loginRedirect()
        msalInstance.loginPopup({
                ...msalConfig,
                prompt: 'create',
            })
            .catch((error) => console.log(error));
    };

    return (
      <>
        <GlobalStyles styles={getGlobalStyles(
          config.colourPrimary as string,
          config.colourPrimaryDark as string,
          config.colourPrimaryDarker as string,
          config.colourPrimaryDarkest as string,
          config.colourPrimaryLight as string,
          config.colourPrimaryLighter as string,
          config.colourPrimaryLightest as string,
        )} />
        <MsalProvider instance={msalInstance}>
          <AuthenticatedTemplate>
            <>{children}</>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <div style={{margin:'auto'}}>
              <button onClick={handleRedirect}>
                Sign in
              </button>
            </div>
          </UnauthenticatedTemplate>
        </MsalProvider>
      </>
    );
}
