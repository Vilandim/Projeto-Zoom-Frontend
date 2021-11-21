import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceProfService } from './../api-service-prof.service';
import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-cadastro-complementar',
  templateUrl: './cadastro-complementar.component.html',
  styleUrls: ['./cadastro-complementar.component.css']
})
export class CadastroComplementarComponent implements OnInit {

  constructor(private apiProfService: ApiServiceProfService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  errorMessage: any
  successMessage:any

  userFormTeacher = this.formBuilder.group({
    name: [null, Validators.required],
    bio: [null, Validators.required]
})


  userSubmit(){
    if(this.userFormTeacher.valid){
      console.log(this.userFormTeacher.value)
      this.apiProfService.createDataTeacher(this.userFormTeacher.value).subscribe( res =>{
        console.log(res, 'res==>')
        this.successMessage = "Cadastro realizado com sucesso!"
        setTimeout(() => this.router.navigate(['/']), 4000)

      } )
    }

    else{
      this.errorMessage = "Preencha corretamente todos os campos!"
    }
  }



}
