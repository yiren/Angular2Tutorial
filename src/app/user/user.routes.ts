import { UserEditGuard } from './user-edit.guard';
import { UserDetailGuard } from './user-detail.guard';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {UserDetailComponent} from './user-detail.component'
import {UserEditComponent} from './user-edit.component';
//import {RouterConfig} from '@angular/router';

export const USER_ROUTES:Routes=[
    {path:'detail', component:UserDetailComponent, canActivate:[UserDetailGuard]},
    {path:'edit', component:UserEditComponent, canDeactivate:[UserEditGuard]}
];
