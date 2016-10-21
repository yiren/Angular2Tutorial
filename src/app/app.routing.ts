import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component"

const APP_ROUTES:Routes=[
  {path:'user/:id', component:UserComponent},
  {path:'', component:AppComponent}

]

export const routing=RouterModule.forRoot(APP_ROUTES);
