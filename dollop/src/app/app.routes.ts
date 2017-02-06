import { RouterModule, Routes } from '@angular/router';
import { HomeRoutes } from './components/views/home/home.routes';
import { AdminRoutes } from './components/views/admin/admin.routes';

const routes: Routes = [
	...HomeRoutes,
  ...AdminRoutes,
	{
		path: '', redirectTo: 'admin', pathMatch: 'full'
	}
];

export const AppRouterProviders = RouterModule.forRoot(routes);
