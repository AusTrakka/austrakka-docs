import React, { useState } from 'react';

import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from "@azure/msal-react";
import { getMsalConfig } from '@site/authConfig';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';



// Default implementation, that you can customize
export default function Root({children}) {
    const {siteConfig, siteMetadata} = useDocusaurusContext();
    console.dir(siteConfig.customFields)
    const msalConfig = getMsalConfig(siteConfig.customFields.azureClientId, siteConfig.customFields.azureTenantId)

    const msalInstance = new PublicClientApplication(msalConfig);

    // Default to using the first account if no account is active on page load
    if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
        // Account selection logic is app dependent. Adjust as needed for different use cases.
        msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
    }

    // Listen for sign-in event and set active account
    msalInstance.addEventCallback((event) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
            const account = event.payload.account;
            msalInstance.setActiveAccount(account);
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
    );
}
