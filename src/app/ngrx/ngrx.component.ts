import 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {

  clock=Observable
        .interval(1000)
        .map(()=>new Date());

  constructor() {
    this.clock.subscribe(console.log);
  }

  ngOnInit() {
  }

}
