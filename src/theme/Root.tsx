import React, { useState, ReactNode } from 'react';

import { PublicClientApplication, EventType, EventMessage, AuthenticationResult } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from "@azure/msal-react";
import { getMsalConfig } from '@site/src/config/authConfig';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {getGlobalStyles, globalStyles} from "@site/src/theme/Theme";
import {GlobalStyles} from "@mui/material";

interface RootProps {
  children: ReactNode;
}

// TODO: this needs to handle selecting account
// Default implementation, that you can customize
export default function Root({children}: RootProps) {
    const {siteConfig} = useDocusaurusContext();
    const msalConfig = getMsalConfig(
      siteConfig.customFields?.azureClientId as string,
      siteConfig.customFields?.azureTenantId as string
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
          siteConfig.customFields?.colourPrimary as string,
          siteConfig.customFields?.colourPrimaryDark as string,
          siteConfig.customFields?.colourPrimaryDarker as string,
          siteConfig.customFields?.colourPrimaryDarkest as string,
          siteConfig.customFields?.colourPrimaryLight as string,
          siteConfig.customFields?.colourPrimaryLighter as string,
          siteConfig.customFields?.colourPrimaryLightest as string,
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
