import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  title = 'app works!';
  posts: Post[] = [
    <Post>{Title: 'Example Post'},
    <Post>{Title: 'Example Post'},
    <Post>{Title: 'Example Post'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
