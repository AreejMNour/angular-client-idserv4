import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    issuer: "https://localhost:5001",
    redirectUri: window.location.origin,
    clientId: 'angularClient',
    scope: 'profile openid exampleService',
    requestAccessToken: true
};
