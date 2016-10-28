import { AuthGuardService } from './auth/auth-guard.service';
import { FirebaseService } from './firebase.service';
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
import { DataDrivenFormComponent } from './form/data-driven-form.component';
import { HttpComponent } from './http/http.component'
import { HttpService } from './http/http.service';

import {AngularFireModule} from 'angularfire2';
import { AuthComponent } from './auth/auth.component';
import { AuthHeaderComponent } from './auth/auth-header.component';
import { SignUpComponent } from './auth/unprotected/sign-up.component';
import { SignInComponent } from './auth/unprotected/sign-in.component';
import { ProtectedComponent } from './auth/protected.component';


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
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [UserDetailGuard, UserEditGuard, HttpService, FirebaseService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
