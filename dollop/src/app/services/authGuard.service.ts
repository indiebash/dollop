import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { SharedService } from './sharedService';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularFire2';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private sharedService: SharedService, private router: Router, private af: AngularFire) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.af.auth.map((auth) => {
      if (!auth) {
        this.router.navigateByUrl('admin/login');
        return false;
      }
      return true;
    }).take(1);
  }
}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.af.auth.getAuth().uid) {
  //     return true;
  //   } else {
  //     this.router.navigateByUrl('admin/login');
  //     return false;
  //   }
  // }

  // canActivate(): boolean {
  //   return this.af.auth.toPromise().then(x => return x.uid);
  //     // .take(1)
  //     // .map((authState: FirebaseAuthState) => !!authState)
  //     // .do(authenticated => {
  //     //   if (!authenticated) this.router.navigateByUrl('admin/login');
  //     // });
  //   return true;
  // }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   let value = this.sharedService.getValue('uid');
  //   if (value) {
  //     return true;
  //   } else {
  //     this.router.navigateByUrl('admin/login');
  //   }
  //   return false;
  // }
