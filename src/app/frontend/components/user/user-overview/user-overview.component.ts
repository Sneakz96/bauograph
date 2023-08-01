import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/frontend/services/user.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})

export class UserOverviewComponent implements OnInit {

  refId!: any;
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.refId = this.route.snapshot.paramMap.get('refId');
    // this.user = this.userService.getUserByRefId(this.refId);
  }

  addNewUser() {
    this.router.navigate(['contacts/add-user']);
    const dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['contacts']);
    });
  }

  checkRoute() {
    console.log(this.refId)
    console.log(this.router.url === `/contacts/details`);
  }
}
