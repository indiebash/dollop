import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { DashboardRoutes } from '../dashboard/dashboard.routes';
import { LoginRoutes } from '../login/login.routes';

export let AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      ...DashboardRoutes,
      ...LoginRoutes,
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
    canActivate: []
  }
];
