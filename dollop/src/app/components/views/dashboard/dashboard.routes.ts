import { DashboardComponent } from './dashboard.component';
import { Routes } from '@angular/router';

export let DashboardRoutes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [],
		canActivate: []
	}
];
