import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/frontend/services/swal.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})

export class AddProjectComponent {

  projectForm!: FormGroup;
  companies = new FormControl();
  companyList: string[] = ['Company 1', 'Company 2', 'Company 3'];

  constructor(
    private swalService: SwalService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      dueDate: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(/^[0-9]{5}$/)]],
      companies: ['', Validators.required],
      urgent: ['', Validators.required]
    });
  }

  goBack() {
    this.projectForm.reset();
    this.router.navigate(['/my-company']);
  }

  clear() {
    console.log('form clear called!');
    this.projectForm.reset();
  }

  addProject() {
    console.log('add project to Db called!', this.projectForm.value);
    if (this.projectForm.valid) {
      this.swalService.fireSuccess();
    }
  }
}
