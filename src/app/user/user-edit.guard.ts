import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {CanDeactivate} from '@angular/router';

export interface ComponentDeactivate{
  canDeactivate:()=>Observable<boolean>|boolean;
}

export class UserEditGuard implements CanDeactivate<ComponentDeactivate>{
  canDeactivate(component:ComponentDeactivate):Observable<boolean>|boolean{
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
