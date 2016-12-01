import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';

export let AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [],
		canActivate: []
	}
];
