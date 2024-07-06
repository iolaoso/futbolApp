import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailPattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

  //formularios reactivos
  loginForm: FormGroup = this.fb.group({
    email: ['israel@gmail.com', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['admin123',[Validators.required]]
  });

  constructor(
    private fb : FormBuilder,
    private authService: AuthService,
  ){  }

  async login(){

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);
    await this.authService.login(this.loginForm.value).subscribe(({status, result, token, message}) => {
      console.log({status, result, token, message});
      if (!status){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
        });
        return;
      }
    });


  }

}
