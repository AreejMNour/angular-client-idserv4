import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    issuer: "https://localhost:5001",
    redirectUri: window.location.origin,
    clientId: 'angularClient',
    scope: 'openid profile',
};
    // "jwks_uri": "https://localhost:5001/.well-known/openid-configuration/jwks", "authorization_endpoint": "https://localhost:5001/connect/authorize", "token_endpoint": "https://localhost:5001/connect/token", "userinfo_endpoint": "https://localhost:5001/connect/userinfo", "end_session_endpoint": "https://localhost:5001/connect/endsession", "check_session_iframe": "https://localhost:5001/connect/checksession", "revocation_endpoint": "https://localhost:5001/connect/revocation", "introspection_endpoint": "https://localhost:5001/connect/introspect", "device_authorization_endpoint": "https://localhost:5001/connect/deviceauthorization", "frontchannel_logout_supported": true, "frontchannel_logout_session_supported": true, "backchannel_logout_supported": true, "backchannel_logout_session_supported": true, "scopes_supported": ["openid", "profile", "email", "offline_access"], "claims_supported": ["sub", "name", "family_name", "given_name", "middle_name", "nickname", "preferred_username", "profile", "picture", "website", "gender", "birthdate", "zoneinfo", "locale", "updated_at", "email", "email_verified"], "grant_types_supported": ["authorization_code", "client_credentials", "refresh_token", "implicit", "password", "urn:ietf:params:oauth:grant-type:device_code"], "response_types_supported": ["code", "token", "id_token", "id_token token", "code id_token", "code token", "code id_token token"], "response_modes_supported": ["form_post", "query", "fragment"], "token_endpoint_auth_methods_supported": ["client_secret_basic", "client_secret_post"], "id_token_signing_alg_values_supported": ["RS256"], "subject_types_supported": ["public"], "code_challenge_methods_supported": ["plain", "S256"], "request_parameter_supported": true }