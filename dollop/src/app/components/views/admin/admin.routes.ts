import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { DashboardRoutes } from '../dashboard/dashboard.routes';
import { LoginRoutes } from '../login/login.routes';
import { EditPostRoutes } from '../edit-post/edit-post.routes';

export let AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      ...DashboardRoutes,
      ...LoginRoutes,
      ...EditPostRoutes,
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
    canActivate: []
  }
];
