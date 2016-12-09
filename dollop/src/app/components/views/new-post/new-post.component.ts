import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularFire2';
import { Post, Content, ContentType } from '../../../models';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.less']
})
export class NewPostComponent implements OnInit {
  post: Post;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.post = new Post();
  }

  savePost(){
    this.af.database.list('/posts').push(this.post);
  }

  addContent(type: number){
    this.post.Content.push(new Content(type, this.post.Content.length, ''));
  }
}
