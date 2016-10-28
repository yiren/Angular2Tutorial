import { AngularFire } from 'angularfire2';
import { FirebaseService } from './../../firebase.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  myForm:FormGroup;

  constructor(private fb:FormBuilder, private authService:FirebaseService, private af:AngularFire) {
    //this.af.auth.subscribe(auth=>console.log(auth));
  }

  ngOnInit() {
    this.myForm=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }

  onSignin(){
    this.authService.signIn(this.myForm.value);
  }


}
