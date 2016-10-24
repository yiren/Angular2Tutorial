import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  constructor() {
    this.myForm=new FormGroup({
      'username': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
    });
  }

  ngOnInit() {
  }

  myForm:FormGroup;

}
