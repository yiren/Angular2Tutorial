import { FirebaseService } from './../../firebase.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  myForm:FormGroup;

  constructor(private fb:FormBuilder, private fs:FirebaseService) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      email:['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password:['', Validators.compose([
        Validators.required
      ])],
      confirmPassword:['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])]

    })
  }

  onSignup(){
    console.log(this.myForm.value);
    this.fs.signUp(this.myForm.value);
  }

  isEmail(control:FormControl):{[s:string]:boolean}{
    if(!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
      return {noEmail:true};
    }
  }

  isEqualPassword(control:FormControl):{[s:string]:boolean}{
    if(!this.myForm){
      return {passwordsNotMatch:true};
    }
    if(control.value !==this.myForm.controls['password'].value){
      return {passwordsNotMatch:true};
    }
  }

}
