import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})

export class ProjectOverviewComponent {

project!: any;

  constructor(
    private router: Router
  ) { 
    this.project = 'Kabelbau';
  }

  goBack() {
    this.router.navigate(['/my-company']);
  }
}
