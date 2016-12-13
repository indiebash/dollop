import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularFire2';
import { Post } from '../../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  posts: Post[];
  
  constructor(private router: Router, private af: AngularFire) { }

  ngOnInit() {
    this.af.database.list('/posts').subscribe(x => this.posts = x);
  }

  newPost(){
    this.router.navigateByUrl('admin/new-post');
  }

}
