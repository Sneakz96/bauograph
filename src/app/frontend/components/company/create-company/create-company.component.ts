import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/frontend/services/swal.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})

export class CreateCompanyComponent {

  companyForm!: FormGroup;

  constructor(
    private swalService: SwalService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.setForm();
  }

  setForm() {
    console.log('set From called!');
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.pattern(/^[a-z-A-Z]+$/)],
      address: ['', Validators.required, Validators.pattern(/^[a-z-A-Z]+$/)],
      number: ['', Validators.required, Validators.pattern(/^[a-z0-9]+$/)],
      email: ['', Validators.required, Validators.email],
      city: ['', Validators.required, Validators.pattern(/^[a-z-A-Z]+$/)],
      state: ['', Validators.required, Validators.pattern(/^[a-z-A-Z]+$/)],
      postalCode: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(/^[0-9]{5}$/)]]
    });
  }

  goBack() {
    this.router.navigate(['/my-company']);
  }

  clearForm() {
    console.log('clear Form called!');
    this.companyForm.reset();
  }

  createCompany() {
    console.log('create Company called!', this.companyForm.value);
    if (this.companyForm.valid) {

    }
  }
}
