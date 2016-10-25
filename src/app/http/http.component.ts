import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data)=>console.log(data)
      );
  }
  onSubmit(username:string, email:string){
      this.httpService.sendData({username:username, email:email})
        .subscribe((data)=>console.log(data));
  }
  onGetData(){

  }
}
