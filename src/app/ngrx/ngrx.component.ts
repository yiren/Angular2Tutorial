import 'rxjs/Rx';

import { Component, OnDestroy, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit, OnDestroy {

  clock$;

  clock=Observable
        .interval(1000)
        .map(()=>new Date());

  constructor() {
    this.clock$=this.clock.subscribe(console.log);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.clock$.unsubscribe();
  }

}
