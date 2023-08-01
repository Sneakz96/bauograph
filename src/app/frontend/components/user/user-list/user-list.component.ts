import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/frontend/models/user.model';
import { UserService } from 'src/app/frontend/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  userList: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.userList = this.userService.getUsers();
    this.sortUsersByLastName();
  }

  sortUsersByLastName() {
    this.userList.sort((a, b) => a.lastName.localeCompare(b.lastName));
  }

  openContact(user: User) {
    this.router.navigate(['contacts'], { queryParams: { userId: user.id } });
  }

  generateInitialsAndDivider(lastName: string, index: number): string {
    const initials = lastName[0].toUpperCase();
    const divider = index === this.userList.length - 1 ? '' : '<mat-divider></mat-divider>';
    return `<span class="letter">${initials}</span>${divider}`;
  }
}
