import { UserEditGuard } from './user/user-edit.guard';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserDetailGuard } from './user/user-detail.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { UserComponent} from './user/user.component'

import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form.component';
import { DataDrivenFormComponent } from './form/data-driven-form.component'

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent,
    FormComponent,
    TemplateDrivenFormComponent,
    DataDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
