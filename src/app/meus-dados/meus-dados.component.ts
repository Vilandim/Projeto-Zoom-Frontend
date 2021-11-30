import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  userData: any
  token = localStorage.getItem('token')

  ngOnInit(): void {

    //Testing
    this.getPersonalData()
  }

  //Testing
  getPersonalData(){
    this.loginService.getPersonalData(this.token).subscribe(res =>{
      console.log(res)
      this.userData = Object.values(res)
      this.userData.shift()
      this.userData = this.userData[0]
      console.log(this.userData)
    },
    error => {
      console.log(error)
    }
    )
  }

}
