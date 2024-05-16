import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;
  passwordVisible = false;
  loading:boolean=false
  goBack()
  {
    this.location.back();
  }
  constructor(private fb: FormBuilder, 
              private location: Location,
              private router: Router,
              private http: HttpClient,
              private toastr: ToastrService) {
    // Initialize the form with name, phone, password, and terms controls
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  // Function to toggle password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Function to handle form submission
  onSubmit() {
    this.loading=true;
    if (this.signUpForm.valid) {
      // Send form data to backend server
      console.log(this.signUpForm.value)
      const formData = this.signUpForm.value;
      const requestBody={
        workerName:formData.name,
        phoneNumber:formData.phone,
        password:formData.password,
        role:'worker'
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
       
        // Add more headers as needed
      });
      console.log(requestBody,'request body');
      const apiUrl='https://mrf-tyres-be.onrender.com/worker/signup'
      this.http.post(apiUrl,requestBody).subscribe(
        response => {

          console.log('Form submitted successfully:', response);
          // Handle success case
          this.loading=false;
          this.router.navigate(['login'])
        },
        error => {
          console.error('Form submission failed:', error);
          // Handle error case
          this.loading=false;
          this.toastr.error('user already exits please log in', 'Error')
        }
      );
    }
    
  }

  navToLogIn(){
    this.router.navigate(['/login']);

  }
}
