import { LogLevel } from "@azure/msal-browser";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */

//const {
//    siteConfig: {customFields},
//} = useDocusaurusContext();

export const msalConfig = {
    auth: {
        //clientId: siteConfig.customFields.azureClientId,
        //authority: `https://login.microsoftonline.com/${siteConfig.customFields.azureClientId}`,
        clientId: "test",
        authority: `https://login.microsoftonline.com/tenant`,
        redirectUri: "http://localhost:3000",
        postLogoutRedirectUri: '/',
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {   
        loggerOptions: {    
            loggerCallback: (level, message, containsPii) => {  
                if (containsPii) {      
                    return;     
                }       
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }   
            }   
        }   
    }
};

export function getMsalConfig(clientId: string, tenantId: string) {
    return {
        auth: {
            clientId: clientId,
            authority: `https://login.microsoftonline.com/${tenantId}`,
            //clientId: "test",
            //authority: `https://login.microsoftonline.com/tenant`,
            redirectUri: "http://localhost:3000",
            postLogoutRedirectUri: '/',
        },
        cache: {
            cacheLocation: "sessionStorage", // This configures where your cache will be stored
            storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        },
        system: {   
            loggerOptions: {    
                loggerCallback: (level, message, containsPii) => {  
                    if (containsPii) {      
                        return;     
                    }       
                    switch (level) {
                        case LogLevel.Error:
                            console.error(message);
                            return;
                        case LogLevel.Info:
                            console.info(message);
                            return;
                        case LogLevel.Verbose:
                            console.debug(message);
                            return;
                        case LogLevel.Warning:
                            console.warn(message);
                            return;
                        default:
                            return;
                    }   
                }   
            }   
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 */
export const loginRequest = {
    scopes: []
};
