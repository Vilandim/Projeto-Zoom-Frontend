import { Router } from '@angular/router';
import { ApiServiceProfService } from './../api-service-prof.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

  constructor(private apiProfService: ApiServiceProfService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  numberRegEx = /\-?\d*\.?\d{1,2}/

  errorMessage:any

  userFormGeneralUser = this.formBuilder.group({
    name: [null, Validators.required],
    rg: [null, [Validators.required, Validators.pattern(this.numberRegEx)]],
    cpf:[null, [Validators.required, Validators.pattern(this.numberRegEx)]],
    email: [null,[Validators.required, Validators.email]],
    password: [null, Validators.required],
    type: ['professor', Validators.required]

  })


  userSubmit(){
    if(this.userFormGeneralUser.valid){
      console.log(this.userFormGeneralUser.value)
      this.apiProfService.createDataUser(this.userFormGeneralUser.value).subscribe(res => {
        console.log(res, 'res==>')
        this.router.navigate(['/'])
      },
      error =>{
        console.log(error)
      })
    }
    else{
      console.log(this.errorMessage = "Preencha corretamente todos os campos")
      this.errorMessage = "Preencha corretamente todos os campos!"


    }
  }




}




