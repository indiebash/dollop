import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseApp } from 'angularFire2';
import { Post, Content, ContentType } from '../../../models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.less']
})
export class EditPostComponent implements OnInit {
  post: Post = new Post();
  postId: string;

  constructor(private af: AngularFire, private route: ActivatedRoute, private router: Router, @Inject(FirebaseApp) private firebaseApp: any) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] === 'new') {
        this.post = new Post();
        this.post.IsPublic = false;
      } else {
        this.postId = params['id'];
        this.af.database.object('/posts/' + this.postId, { preserveSnapshot: true }).subscribe(x => {this.post = x.val(); this.post.Tags = this.post.Tags ? this.post.Tags : []} );
      }
    });
  }

  savePost() {
    if (!this.post.DatePublished && this.post.IsPublic) {
      this.post.DatePublished = moment().format('MM/DD/YYYY').toString();
    }
    if (this.postId) {
      this.af.database.list('/posts').update(this.postId, this.post);
    } else {
      this.af.database.list('/posts').push(this.post);
    }
    this.router.navigateByUrl('admin/dashboard');
  }

  addContent(type: number) {
    this.post.Content = this.post.Content ? this.post.Content : [];
    this.post.Content.push(new Content(type, this.post.Content.length, ''));
  }

  saveImage(file: File, content: Content) {
    let ref = this.firebaseApp.storage().ref().child('images/' + file.name);
    ref.put(file).then(function (snapshot) {
      console.log(snapshot);
      content.Value = snapshot.downloadURL;
      content.ImageName = file.name;
    });
  }
}
