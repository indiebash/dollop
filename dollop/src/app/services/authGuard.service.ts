import { Injectable, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { SharedService } from './sharedService';
import { AngularFire, FirebaseListObservable } from 'angularFire2';

@Injectable()
export class AuthGuard implements CanActivate, OnInit {

  constructor(private sharedService: SharedService, private router: Router, private af: AngularFire) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let value = this.sharedService.getValue('uid');
    if (value) {
      return true;
    } else {
      this.router.navigateByUrl('admin/login');
    }
    return false;
  }
}
