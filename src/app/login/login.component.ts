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
    // console.log("scope ",this.oAuthService.());
    

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
  async CallApi() {
    
    // this.http.get("https://localhost:5001/connect/token").toPromise()
    // .then(res=>{
    //   console.log("Res ",res);
      
    // }).catch(err=>{
    //   console.log("err");
      
    // })
    // var headers = {
    //   // 'Access-Control-Allow-Origin': '*',
    //   // 'Authorization':"Bearer "+this.token

    //   'content-type': 'application/json',
    //   // "accept": "*/*",
    //   'access_token': this.token,
    //   'id_token': this.token,
    //   'token_type':'Bearer'
    // };
    try{
      
    let result = await this.http.post("https://localhost:7011/WeatherForecast/test", null,{
      headers:{
        // "access_token": this.oAuthService.getAccessToken(),
        // "id_token":this.oAuthService.getIdToken(),
        // "token_type":"Bearer"
        "accept": "*/*",
        'Authorization':"Bearer "+this.oAuthService.getAccessToken(),
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }
    }).toPromise();
    console.log("result ",result);
    
    }
    catch(err){
      console.log("err ",err);
      
    }
  }

}
