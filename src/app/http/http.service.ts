import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http:Http) {

  }

  getData(){
    return this.http.get("https://angular2tutorial-3e5ed.firebaseio.com/title.json");
  }

}
