import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent implements OnInit {
  private subscription:Subscription


  constructor(private authService:FirebaseService, private router:Router) {

  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['auth','signup']);
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
