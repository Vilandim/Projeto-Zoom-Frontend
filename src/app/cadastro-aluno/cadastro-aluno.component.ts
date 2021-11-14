import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  userForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'RG': new FormControl('', Validators.required),
    'CPF': new FormControl('', Validators.required),
    'email': new FormControl('',Validators.required),
    'password': new FormControl('', Validators.required),
    'role': new FormControl('', Validators.required),
    'type': new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe(res => {
        console.log(res, 'res==>')
        this.userForm.reset()
      },
      error =>{
        console.log(error)
      })
    }
  }

}
