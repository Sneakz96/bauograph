import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/frontend/services/swal.service';
import { User } from 'src/app/frontend/models/user.model';
import { UserService } from 'src/app/frontend/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {

  formData!: User;
  contactForm!: FormGroup;

  constructor(
    private router: Router,
    private swal: SwalService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<AddUserComponent>
  ) {
    this.setForm();
  }

  setForm() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(14),
        Validators.pattern(/^[a-zA-Z]+$/)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z]+$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      birthdate: ['', [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
      ]],
      city: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$-/)
      ]],
      plz: ['', [
        Validators.required,
        Validators.pattern(/^\d{5}$/)
      ]]
    });
  }

  save() {
    if (this.contactForm.valid) {
      this.formData = this.contactForm.value;
      this.userService.userList.push(this.formData);
      this.contactForm.reset();
      this.router.navigate(['contacts']);
      this.dialogRef.close();
      this.swal.fireSuccess();
    }
  }

  close() {
    this.router.navigate(['contacts']);
    this.dialogRef.close();
  }
}
