import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  displayRegister: Boolean = false;
  signInForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) {
    this.signInForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
 signup() {
  this.displayRegister = true
 }
 login() {
  this.displayRegister = false
 }
 loginApi() {
  this.authService.signIn(this.signInForm.value);
  this.router.navigate(['dashboard/dashboard'])
}
}
