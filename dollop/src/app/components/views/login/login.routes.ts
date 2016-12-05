import { LoginComponent } from './login.component';
import { Routes } from '@angular/router';

export let LoginRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		children: [],
		canActivate: []
	}
];
