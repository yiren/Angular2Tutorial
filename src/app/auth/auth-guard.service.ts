import { AngularFire } from 'angularfire2';
import { Observable, Subscription } from 'rxjs/Rx';
import { FirebaseService } from './../firebase.service';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate, OnDestroy{
  private subscription:Subscription;
  private isAuthenticated:boolean;

  constructor(private authService:FirebaseService) {

  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean{
    return this.authService.isAuthenticated();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
