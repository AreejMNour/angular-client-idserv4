import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  claims: any;
  hasLoadedProfile: boolean;
  constructor(private oAuthService: OAuthService) { }

  ngOnInit(): void {
  }
  Login() {
    this.oAuthService.initImplicitFlow()
  }
  Logout() {
    this.oAuthService.logOut();
  }
  get isAuthenticated(): boolean {
    this.claims = this.oAuthService.getIdentityClaims();
    console.log("claims ",this.claims);
    
    if (this.claims != undefined && this.claims != null) {
      if(!this.hasLoadedProfile){
        this.hasLoadedProfile = true;
        this.oAuthService.loadUserProfile();
      }
      return true;
    }
    return false;
  }
}
