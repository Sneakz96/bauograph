import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/frontend/services/login.service';
import { SwalService } from 'src/app/frontend/services/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private swalService: SwalService,
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.setForm();
  }

  setForm(): void {
    this.loginForm = this.formBuilder.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.loginName, this.loginForm.value.password);
    } else {
      this.swalService.fireFail();
    }
  }

  createAccount(): void {
    console.log('guest Login called!');
    this.router.navigate(['/register']);
  }
}
