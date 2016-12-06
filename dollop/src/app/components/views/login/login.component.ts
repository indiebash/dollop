import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularFire2';
import { SharedService } from '../../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire, public sharedService: SharedService) {
    this.login();
  }

  login() {
    this.af.auth.login();
  }

  ngOnInit() {
    this.af.auth.subscribe(s => this.sharedService.setVar('uid', s.uid));
  }

}
