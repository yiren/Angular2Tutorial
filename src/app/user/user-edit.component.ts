import { Observable } from 'rxjs/Rx';
import { ComponentDeactivate } from './user-edit.guard';
import { Router, CanDeactivate } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done=true">Done</button>
        <button (click)="onNavigate()">Go Home</button>
    `
})
export class UserEditComponent implements ComponentDeactivate {
  done=false;

  constructor(private router:Router){

  }

  onNavigate(){
        this.router.navigate(['/']);
    }

  canDeactivate():Observable<boolean>|boolean{
    if(!this.done){
      return confirm("Are you sure?");
    }
    return true;
  }
}
