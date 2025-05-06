import { Routes } from '@angular/router';
import {authRoutes} from "@features/auth/auth.routes";
import {DashboardComponent} from "@features/dashboard/dashboard.component";
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...authRoutes,
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
