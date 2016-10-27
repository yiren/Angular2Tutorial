import { User } from './user/user';
import { Injectable } from '@angular/core';
import {FirebaseDatabase, AngularFire, FirebaseAuthConfig, FirebaseAuth} from 'angularfire2';


@Injectable()
export class FirebaseService {

  constructor(private af:AngularFire, private auth:FirebaseAuth) {

  }

  signUp(user:User){
    this.af.auth.createUser(user);
  }

  signIn(user:User){

    this.af.auth.login({email:user.email, password:user.password});
  }

  signOut(){
    this.af.auth.logout();
  }
}
