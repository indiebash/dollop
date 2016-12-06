import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.less']
})
export class NewPostComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
  }

  post(){

  }
}
