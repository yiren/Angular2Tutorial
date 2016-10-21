import { Component, OnDestroy } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  param:string
  
  private subscription:Subscription;

  constructor(private route:ActivatedRoute){
        this.subscription=route.queryParams.subscribe(
            (queryParam:any) => this.param=queryParam['analytics']
        );
    }

  ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
