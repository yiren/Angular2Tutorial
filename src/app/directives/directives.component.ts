import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  private toggled=true;
  private items=[1,2,3,4,5];
  private value=100;
  constructor() { }

  onToggle(){
    return this.toggled=!this.toggled;
  }

  ngOnInit() {
  }

}
