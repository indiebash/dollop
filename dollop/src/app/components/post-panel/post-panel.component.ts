import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models';

@Component({
  selector: 'post-panel',
  templateUrl: './post-panel.component.html',
  styleUrls: ['./post-panel.component.less']
})
export class PostPanelComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
