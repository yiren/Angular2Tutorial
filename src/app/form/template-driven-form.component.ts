import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


  user={
    username:'Goo',
    email:'joombuopre@test.com',
    password:'test',
    gender:'male'
  }

  genders=[
    'male',
    'female'
  ];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form);
  }
}
