import { Headers, Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http:Http) {

  }

  getChangeRequestData(){
    return this.http.get("http://localhost:52460/crdata")
                    .map((res:Response)=>res.json());
  }

  getData(){
    return this.http.get("https://angular2tutorial-3e5ed.firebaseio.com/title.json")
              .map((res:Response)=>res.json());
  }

  sendData(user:any){
    const body=JSON.stringify(user);
    const headers=new Headers();
    headers.append("Content-Type",'application/json');
    return this.http.post("https://angular2tutorial-3e5ed.firebaseio.com/data.json",body,
    {headers:headers})
    .map((res:Response)=>res.json())
    .catch(this.handleError);
  }

  getOwnData(){
    return this.http.get("https://angular2tutorial-3e5ed.firebaseio.com/data.json")
              .map((res:Response)=>res.json());
  }

  private handleError(error:any){
    console.log(error);
    return Observable.throw(error.json());
  }
}
