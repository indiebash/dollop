import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularFire2';
import { Post, Content, ContentType } from '../../../models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.less']
})
export class EditPostComponent implements OnInit {
  post: Post = new Post();
  postId: string;

  constructor(private af: AngularFire, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] === 'new') {
        this.post = new Post();
      } else {
        this.postId = params['id'];
        this.af.database.object('/posts/' + this.postId, {preserveSnapshot: true}).subscribe(x => this.post = x.val());
        this.post.Content = this.post.Content ? this.post.Content : [];
        this.post.Tags = this.post.Tags ? this.post.Tags : [];
      }
    });
  }

  savePost() {
    if(this.postId){
      this.af.database.list('/posts').update(this.postId, this.post);
    }else{
      this.af.database.list('/posts').push(this.post);
    }
    this.router.navigateByUrl('admin/dashboard');
  }

  addContent(type: number) {
    this.post.Content.push(new Content(type, this.post.Content.length, ''));
  }
}
