import { EditPostComponent } from './edit-post.component';
import { Routes } from '@angular/router';
import { AuthGuard } from '../../../services/';

export let EditPostRoutes: Routes = [
	{
		path: 'edit-post/:id',
		component: EditPostComponent,
		children: [],
		canActivate: [AuthGuard]
	}
];
