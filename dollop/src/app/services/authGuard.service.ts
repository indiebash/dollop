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
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularFire2';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, OnInit {

  constructor(private sharedService: SharedService, private router: Router, private af: AngularFire, private auth: FirebaseAuth) { }

  ngOnInit() {
  }

  canActivate(): Observable<boolean> {
    return this.auth
      .take(1)
      .map((authState: FirebaseAuthState) => !!authState)
      .do(authenticated => {
        if (!authenticated) this.router.navigateByUrl('admin/login');
      });
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   let value = this.sharedService.getValue('uid');
  //   if (value) {
  //     return true;
  //   } else {
  //     this.router.navigateByUrl('admin/login');
  //   }
  //   return false;
  // }
}
