import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import { AnotherComponent } from './other/another.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthHeaderComponent } from './auth/auth-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataDrivenFormComponent } from './form/data-driven-form.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { FirebaseService } from './firebase.service';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component'
import { HttpModule } from '@angular/http';
import { HttpService } from './http/http.service';
import { MaterialComponent } from './material/material.component';
import {MdlModule} from 'angular2-mdl';
import { NgModule } from '@angular/core';
import { NgrxComponent } from './ngrx/ngrx.component';
import { OtherComponent } from './other/other.component';
import { PipeComponent } from './pipe/pipe.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { ProtectedComponent } from './auth/protected.component';
import { SignInComponent } from './auth/unprotected/sign-in.component';
import { SignUpComponent } from './auth/unprotected/sign-up.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { UnlessDirective } from './directives/unless.directive';
import { UserComponent } from './user/user.component'
import { UserDetailComponent } from './user/user-detail.component';
import { UserDetailGuard } from './user/user-detail.guard';
import { UserEditComponent } from './user/user-edit.component';
import { UserEditGuard } from './user/user-edit.guard';
import {routing} from './app.routing';

const firebaseConfig={
    apiKey: "AIzaSyBn_OSsAYjT7rxP4Tu-KNoKmEd0IYtFswo",
    authDomain: "angularauth-850e7.firebaseapp.com",
    databaseURL: "https://angularauth-850e7.firebaseio.com",
    storageBucket: "angularauth-850e7.appspot.com",
    messagingSenderId: "605791227084"
}

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
    DataDrivenFormComponent,
    HttpComponent,
    AuthComponent,
    AuthHeaderComponent,
    SignUpComponent,
    SignInComponent,
    ProtectedComponent,
    PipeComponent,
    NgrxComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing,
    MdlModule

  ],
  providers: [UserDetailGuard, UserEditGuard, HttpService, FirebaseService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
