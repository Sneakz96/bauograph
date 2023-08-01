import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/frontend/services/login.service';
import { SideNavService } from 'src/app/frontend/services/side-nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  loggedUserName!: any;

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(
    public sideNavService: SideNavService,
    private loginService: LoginService
  ) {
  }
  
  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    this.loggedUserName = 'Guest';
    
  }

  toggleUserNav() {
    this.trigger.openMenu();
  }
}
