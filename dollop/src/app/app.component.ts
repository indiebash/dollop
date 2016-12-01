import { Component } from '@angular/core';
import { Post } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';
  posts: Post[] = [
    <Post>{Title: 'Example Post'},
    <Post>{Title: 'Example Post'},
    <Post>{Title: 'Example Post'}
  ];
}
