import { Injectable } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(
    private oAuthService:OAuthService,
    private router:Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.oAuthService.hasValidAccessToken()) {
        return true;
    }

    this.router.navigate(['/home']);

    return false;
}
}
