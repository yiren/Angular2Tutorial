import {AngularFire, AuthMethods, AuthProviders, FirebaseAuthConfig, FirebaseAuthState} from 'angularfire2';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { User } from './user/user';

@Injectable()
export class FirebaseService {

  constructor(private af:AngularFire) {
      this.af.auth.subscribe(auth=>console.log(auth));
  }

  private isAuth:boolean;

  signUp(user:User){
    this.af.auth.createUser(user);
  }

  signIn(user:User){
    //this.auth.login({email:user.email, password:user.password});
    this.af.auth.login({email:user.email, password:user.password}
    ,{
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }


  logout(){
    this.af.auth.logout();
    //this.router.navigate(['auth','signin']);
  }

  isAuthenticated(){

    this.af.auth.subscribe(auth=>
      {
        if(auth){
          this.isAuth=true;
        }
        else{
          this.isAuth=false;
        }
      });
    return this.isAuth;
  }


}
