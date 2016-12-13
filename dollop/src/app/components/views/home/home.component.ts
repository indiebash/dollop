import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models';
import { AngularFire, FirebaseListObservable } from 'angularFire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.af.database.list('/posts').subscribe(x => this.posts = x);
  }

}
