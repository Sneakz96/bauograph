import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  constructor() {

  }

  setProfile() {
    console.log('set Profile called');
  }

  setProfilePic() {
    console.log('set ProfilePic called');
  }
}
