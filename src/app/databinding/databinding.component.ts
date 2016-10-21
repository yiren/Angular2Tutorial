import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation="This is a StringInterpolation";
  numberInterpolation="4";
  constructor() { }

  ngOnInit() {
  }
  

  onTest(){
    return true;
  }
  GetTextColor(){
    return "green";
  }
  onClicked(value:string){
    alert(value);
  }
}
