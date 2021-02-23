import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {LoginComponent} from "../login/login.component";
import { AuthGuardServiceService } from "./auth-guard-service.service";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', canActivate: [!AuthGuardServiceService] },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [!AuthGuardServiceService]
  },

];
export default appRoutes;

