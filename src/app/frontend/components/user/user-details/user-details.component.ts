                                                                   import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/frontend/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  refId!: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { 
    console.log('init User Details');
  }

  ngOnInit(): void {
    this.getQueryParam();
  }

  getQueryParam() {
    this.route.queryParamMap.subscribe(params => {
      this.refId = params.get('userId'); // Änderung: Auslesen des userId-Query-Parameters
      console.log('userId:', this.refId);
      this.user = this.userService.getUserByRefId(this.refId);
    });
  }

  editUser() {
    console.log('edit user called!');
  }

  deleteUser() {
    console.log('delete user called!');
  }
}
