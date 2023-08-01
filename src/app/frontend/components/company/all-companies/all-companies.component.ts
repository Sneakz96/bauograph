import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Database } from 'src/app/backend/database';
import { Company } from 'src/app/frontend/models/company.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.scss']
})

export class AllCompaniesComponent {

  displayedColumns: string[] = ['id', 'name', 'city', 'postCode', 'leader'];
  companyList: Company[] = [];
  isLoadingResults = false;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Company>(this.companyList);

  constructor(
    private db: Database,
    private router: Router
  ) {
    this.getAllCompanies();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  async getAllCompanies() {
    try {
      this.companyList = await this.db.getAllCompanies();
      this.dataSource.data = this.companyList;
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  open(company: Company) {
    this.router.navigate(['/all-companies/details']);
    console.log(company, this.router.url);
  }

  goBack() {
    this.router.navigate(['/my-company']);
  }
}
