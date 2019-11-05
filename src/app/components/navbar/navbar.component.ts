import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean = false;
  constructor(private as: AuthService, private us: UserService) {}

  ngOnInit() {
    this.as.user.subscribe((user) => {
      if (user) {
        this.isUser = true;
        this.as.userId = user.uid;
        this.us.getUserData().subscribe(data => {
          if (data['admin']) {
            this.isAdmin = true;
          }
          else{
            this.isAdmin = false;
          }
        })
      } else {
        this.isUser = false;
        this.as.userId = '';
      }
    });
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.as.logout();
  }
}