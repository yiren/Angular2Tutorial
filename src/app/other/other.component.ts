import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-other',
  templateUrl: './other.component.html',
  styles: [`
      h1{
        color:green;
      }
  `]
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
