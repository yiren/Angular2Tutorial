import {RouterModule, Routes} from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { ProtectedComponent } from './protected.component';
import { SignInComponent } from './unprotected/sign-in.component';
import { SignUpComponent } from './unprotected/sign-up.component';

export const AUTH_ROUTES:Routes=[
  {path:'', redirectTo:'signup', pathMatch:'full'},
  {path:'signup' , component:SignUpComponent},
  {path:'signin' , component:SignInComponent},
  {path:'protected' , component:ProtectedComponent, canActivate:[AuthGuardService]}
]

export const auth_routing=RouterModule.forChild(AUTH_ROUTES);
