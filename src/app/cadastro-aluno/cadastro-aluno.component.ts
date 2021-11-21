import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  constructor(private service: ApiserviceService, private formBuilder: FormBuilder) { }

  numberRegEx = /\-?\d*\.?\d{1,2}/

  errorMessage:any
  successMessage:any


  userForm = this.formBuilder.group({
    name: [null, Validators.required],
    rg: [null, [Validators.required, Validators.pattern(this.numberRegEx)]],
    cpf: [null,[Validators.required, Validators.pattern(this.numberRegEx)]],
    email: [null,[Validators.required, Validators.email]],
    password: [null,Validators.required],
    type: ['aluno', Validators.required]
  })


  ngOnInit(): void {
  }

  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe(res => {
        console.log(res, 'res==>')
        this.successMessage = "Cadastro realizado com sucesso!"
        setTimeout( () => window.location.reload(), 3000)
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
