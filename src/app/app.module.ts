import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthModule, LogLevel, OidcConfigService, OidcSecurityService } from 'angular-auth-oidc-client';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import AppRoutingModule from './shared/routerConfig';
import { AuthGuardServiceService } from './shared/auth-guard-service.service';


// export function configureAuth(oidcConfigService: OidcConfigService) {
//   return () =>
//     oidcConfigService.withConfig({
//       clientId: 'angularClient',
//       stsServer: 'http://localhost:5000',
//       responseType: 'implicit',
//       redirectUrl: window.location.origin,
//       postLogoutRedirectUri: window.location.origin,
//       scope: 'openid profile',
//       // silentRenew: true,
//       // silentRenewUrl: `${window.location.origin}/silent-renew.html`,
//       logLevel: LogLevel.Debug,
//     });
// }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(
      {resourceServer: {
      allowedUrls: ['https://localhost:5001'],
      sendAccessToken: true
    }}
    ),
    // RouterModule.forRoot(AppRoutingModule),
    // RouterModule.forRoot([{path: "", component:AppComponent}])

  ],
  providers: [
    AuthGuardServiceService
    // OidcConfigService,
    // OidcSecurityService,
    // {
    //   provide: APP_INITIALIZER,
    //   // useFactory: configureAuth,
    //   deps: [OidcConfigService],
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
