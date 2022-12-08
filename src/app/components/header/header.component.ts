import { UserAuthService } from './../../Services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLoging: boolean;

  constructor(private authService: UserAuthService) {

    this.userLoging = this.authService.isUserLogged;
  }

  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status => {
           this.userLoging =status;
    })
  }

}
