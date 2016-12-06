import { DashboardComponent } from './dashboard.component';
import { Routes } from '@angular/router';
import { AuthGuard } from '../../../services/';

export let DashboardRoutes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [],
		canActivate: [AuthGuard]
	}
];
