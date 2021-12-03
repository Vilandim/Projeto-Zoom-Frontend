import { FormBuilder } from '@angular/forms';
import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {


  constructor(private loginService: LoginServiceService, private formBuilder: FormBuilder) { }

  userData: any
  token = localStorage.getItem('token')



  ngOnInit(): void {

    //Testing
    this.getPersonalData()
  }

  //Testing
  getPersonalData(){
    this.loginService.getPersonalData().subscribe(res =>{
      console.log(res)
      this.userData = Object.values(res)
      console.log(this.userData)
      this.userData.shift()
      console.log(this.userData)


    },
    error => {
      console.log(error)
    }
    )
  }

  deleteUser(id:any){
    this.loginService.deletePersonalData(id).subscribe(res => {
      console.log(res)
    },
    error => { console.log(error)}
    )
  }



}
