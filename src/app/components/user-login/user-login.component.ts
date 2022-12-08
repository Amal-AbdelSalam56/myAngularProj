import { UserAuthService } from './../../Services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

   userLoging:boolean = false;

  constructor(private authService:UserAuthService) { }

  ngOnInit(): void {
    this.userLoging = this.authService.isUserLogged;
  }

  login(){
    this.authService.login("UEmail","UPassword");
    this.userLoging=this.authService.isUserLogged
  }

  logout(){
    this.authService.logout();
    this.userLoging=this.authService.isUserLogged
  }

}
