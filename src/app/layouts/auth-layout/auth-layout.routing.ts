import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AdminLoginComponent} from '../admin-layout/pages/admin-login/admin-login.component';



export const AuthLayoutRoutes: Routes = [
  { path: 'login',          component: LoginComponent },
  { path: 'register',       component: RegisterComponent },
  {path: 'admin', component: AdminLoginComponent}
];
