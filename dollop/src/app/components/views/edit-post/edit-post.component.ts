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

  constructor(private af: AngularFire, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] === 'new') {
        this.post = new Post();
      } else {
        this.af.database.object('/posts/' + params['id']).subscribe(x => this.post = x);
      }
    });
  }

  savePost() {
    console.log(this.post);
    if(this.post['$key']){
      this.af.database.list('/posts').remove(this.post['$key']);
      this.post = _.map(this.post, (x:Post) => <Post>{Content: x.Content, IsPublic: x.IsPublic, Summary: x.Summary, Tags: x.Tags, Title: x.Title})
      this.af.database.list('/posts').push(this.post);
    }else{
      this.af.database.list('/posts').push(this.post);
    }
  }

  addContent(type: number) {
    this.post.Content.push(new Content(type, this.post.Content.length, ''));
  }
}
