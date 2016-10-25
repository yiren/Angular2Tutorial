import { FORM_ROUTES } from './form/form.routes';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { USER_ROUTES } from './user/user.routes';
import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component"
import { HttpComponent } from './http/http.component';

const APP_ROUTES:Routes=[
  {path:'user/:id', component:UserComponent},
  {path:'user/:id', component:UserComponent, children:USER_ROUTES},
  {path:'form', component:FormComponent, children:FORM_ROUTES},
  {path:'http', component:HttpComponent},
  {path:'', component:HomeComponent}

]

export const routing=RouterModule.forRoot(APP_ROUTES);
