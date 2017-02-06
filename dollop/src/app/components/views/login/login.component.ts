import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularFire2';
import { SharedService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public af: AngularFire, public sharedService: SharedService, public router: Router) { }

  login() {
    this.af.auth.login({ email: this.email, password: this.password });
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
    if (this.sharedService.getValue('uid')) {
      this.router.navigateByUrl('admin/dashboard');
    }
  }

}
