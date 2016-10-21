import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  @Output()
  clicked=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClicked(){
    this.clicked.emit('It works!!');
  }

}
