import { NewPostComponent } from './new-post.component';
import { Routes } from '@angular/router';
import { AuthGuard } from '../../../services/';

export let NewPostRoutes: Routes = [
	{
		path: 'new-post',
		component: NewPostComponent,
		children: [],
		canActivate: [AuthGuard]
	}
];
