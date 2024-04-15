import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { RegisterRequest } from '../../services/Requests/registerRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerError: string = '';

  registerForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50),
      ],
    ],
    password: [
      '',
      [
        Validators.required, Validators.minLength(8), Validators.maxLength(20)
      ],
    ],
    name: [
      '',
      [
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ],
    ],
    country: [
      '',
      [
        Validators.required
      ],
    ],
  });

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  get email() {
    return this.registerForm.controls.email;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  get name() {
    return this.registerForm.controls.name;
  }

  get country() {
    return this.registerForm.controls.country;
  }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value as RegisterRequest).subscribe({
        next: (userData) => {
        },
        error: (errorData) => {
          console.error(errorData);
          this.registerError = errorData;
        },
        complete: () => {
          console.info('Login completo');
          this.router.navigateByUrl('/inicio');
          this.registerForm.reset();
        },

      });
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
