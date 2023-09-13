import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;



  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  get email() {

    return this.loginForm.get('email') as FormControl

  }

  get password() {

    return this.loginForm.get('password') as FormControl

  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    })

  }
  login() {

    this.http.get<any>("http://localhost:3000/signupUser")

      .subscribe((res: any[]) => {

        const user = res.find((a: any) => {



          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;

        });
        if (user) {



          alert("Login successfull");



          this.loginForm.reset();



          if (user.role == 'admin') {




            this.router.navigate(['product-dashboard'])



          }

          else {
            this.router.navigate(['product'])
          }

          //this.router.navigate(['list'])

          //alert('Something went wrong');
        } else {
          //alert("User not found");

        }

      }, err => {



        alert("Something went wrong");



      })



  }



}










