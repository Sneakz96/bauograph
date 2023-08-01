import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})

export class CompanyDetailsComponent {

  constructor(
    private router: Router
  ) { }

  goBack() {
    this.router.navigate(['/all-companies']);
  }

  editCompany(){
    console.log('edit Company called!');
  }
}
