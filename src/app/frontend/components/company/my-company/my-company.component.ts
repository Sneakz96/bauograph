import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 97, name: 'Tiefbau', date: '20.04.2024' },
  { id: 659, name: 'Kabelbau', date: '21.04.2024' },
  { id: 39, name: 'Strassenbau', date: '22.04.2024' }
];

@Component({
  selector: 'app-my-company',
  templateUrl: './my-company.component.html',
  styleUrls: ['./my-company.component.scss']
})


export class MyCompanyComponent {
  displayedColumns: string[] = ['id', 'name', 'date', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open(project: any): void {
    console.log('open project:', project.id, project.name);
    this.router.navigate(['/project/' + project.id]);
  }

  addProject(): void {
    console.log('add project called!');
    this.router.navigate(['/add-project']);
  }

  showCompanyList(){
    console.log('show CompanyList called!');
    this.router.navigate(['/all-companies']);
  }

  addCompany(){
    console.log('create company called!');
    this.router.navigate(['/create-company']);
  }
}
