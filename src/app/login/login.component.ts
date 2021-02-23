import { Component, OnDestroy, OnInit } from '@angular/core';
import { OidcClientNotification, OidcSecurityService, PublicConfiguration } from 'angular-auth-oidc-client';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  claims: any;
  hasLoadedProfile: boolean;
  token: string;
  constructor(public oAuthService: OAuthService, private http: HttpClient) { }


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

    this.token = this.oAuthService.getAccessToken();

    console.log("claims ", this.claims);

    if (this.claims != undefined && this.claims != null) {
      if (!this.hasLoadedProfile) {
        this.hasLoadedProfile = true;
        this.oAuthService.loadUserProfile();
      }
      // else{
      //   this.hasLoadedProfile = false;
      // }
      return true;
    }
    return false;
  }
  CallApi() {
    this.token = this.oAuthService.getAccessToken();
    console.log("token ",this.token);
    
    // this.http.get("https://localhost:5001/connect/token").toPromise()
    // .then(res=>{
    //   console.log("Res ",res);
      
    // }).catch(err=>{
    //   console.log("err");
      
    // })
    var headers = {
      // 'Access-Control-Allow-Origin': '*',
      // 'Authorization':"Bearer "+this.token

      // 'content-type': 'application/json',
      // "accept": "*/*",
      'Authorization': 'Bearer ' + this.token
    };

    this.http.get("https://localhost:7011/WeatherForecast/test", {
      headers: new HttpHeaders(headers)
    }).toPromise().then(res => {
      console.log("Res ", res);

    }).catch(err => {
      console.log("err ", err);

    })
  }

}
