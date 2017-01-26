import 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject'

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {

  clock$=new Subject();
  clock:Observable<Date>;
  // clock=Observable
  //       .interval(1000)
  //       .map(()=>new Date());

  constructor() {
    //this.clock.subscribe(console.log);
    this.clock=Observable.merge(
      Observable.interval(1000),
      this.clock$)
        .startWith(new Date())
        .scan((acc, curr)=>{
          let date=acc;
          console.log(Date.now()+1)
          date=new Date(Date.now()+1);
          console.log(date);
          return date;
        });

  }

  ngOnInit() {
  }

}
