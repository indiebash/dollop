import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularFire2';
import { SharedService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire, sharedService: SharedService) {
    this.items = af.database.list('/items');
  }
}
