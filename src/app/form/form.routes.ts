import { DataDrivenFormComponent } from './data-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { Routes } from '@angular/router';


export const FORM_ROUTES:Routes=[
  {path:'', component:TemplateDrivenFormComponent},
  {path:'dataDriven', component:DataDrivenFormComponent}
]
