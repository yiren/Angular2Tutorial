import { AuthGuardService } from './auth-guard.service';
import { ProtectedComponent } from './protected.component';
import { SignUpComponent } from './unprotected/sign-up.component';
import { SignInComponent } from './unprotected/sign-in.component';

import {Routes} from '@angular/router';


export const AUTH_ROUTES:Routes=[
  {path:'', redirectTo:'signup', component:SignUpComponent},
  {path:'signup' , component:SignUpComponent},
  {path:'signin' , component:SignInComponent},
  {path:'protected' , component:ProtectedComponent, canActivate:[AuthGuardService]}
]

