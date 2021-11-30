import { Router } from '@angular/router';
import { LoginServiceService } from './../login-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService ,private formBuilder: FormBuilder, private router: Router) { }

  errorMessage: any
  successMessage: any




  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  get token() {
    return localStorage.getItem('token')
  }

  doLogin() {
    if(this.loginForm.valid){
    this.loginService.doLogin(this.loginForm.value).subscribe(res => {
      console.log(res.data)
      localStorage.setItem("token", res.data)
      this.successMessage = "Login realizado com sucesso"
      console.log(`Token: ${localStorage.getItem("token")}`)
      setTimeout(() => window.location.reload(), 3000)
      this.router.navigate(['/'])


    },
    error => {console.log(error)
      this.errorMessage = "Email ou senha incorretos"
    })
  }
    else{
      this.errorMessage = "Email ou senha incorretos";
    }
}

}
