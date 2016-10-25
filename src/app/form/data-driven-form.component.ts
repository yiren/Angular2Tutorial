import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  genders=[
    'male',
    'female'
  ];

  constructor() {
    this.myForm=new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl('Goo', [Validators.required, Validators.minLength(4)]),
        'email': new FormControl('', Validators.required),
      }),
      // 'username': new FormControl('Goo', [Validators.required, Validators.minLength(4)]),
      // 'email': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.minLength(5), Validators.required]),
      'gender':new FormControl(),
      'hobbies':new FormArray([
        new FormControl('Cooking')
      ])
    });

    this.myForm.valueChanges.subscribe(
      (data)=>console.log(data)
    );

    this.myForm.statusChanges.subscribe(
      (data)=>console.log(data)
    );
  }

  ngOnInit() {
    console.log(this.myForm);
  }

  myForm:FormGroup;

  onSubmit(){
    console.log(this.myForm)
  }

  onAddHobby(){
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }
}
