import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SideNavService } from 'src/app/frontend/services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  
  isOpen = false;
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(
    public sideNavService: SideNavService
  ){ }

  ngOnInit() {
    this.sideNavService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      if (this.drawer) {
        this.drawer.toggle(isOpen);
      }
    });
  }
}
