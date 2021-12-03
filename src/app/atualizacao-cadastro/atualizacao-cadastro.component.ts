import { FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizacao-cadastro',
  templateUrl: './atualizacao-cadastro.component.html',
  styleUrls: ['./atualizacao-cadastro.component.css']
})
export class AtualizacaoCadastroComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: ActivatedRoute, private formBuilder: FormBuilder) { }

  ids = this.router.snapshot.paramMap.get('id')

  userForm = this.formBuilder.group({
    id: [this.ids, Validators.required],
    name: ['',Validators.required],
    rg: ['', Validators.required],
    cpf: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]

  })



  errorMessage: any
  successMessage: any

  ngOnInit(): void {
  }

  updateUserData(){
    if(this.userForm.valid){
    this.loginService.updateUserData(this.userForm.value).subscribe(res =>{
      console.log(res)
      this.successMessage = "Dados atualizados com sucesso"

    },
    error => {console.log(error)
    this.errorMessage = "Preencha corretamente os campos"}
    )
  }else{
    this.errorMessage = "Preencha corretamente os campos"
  }
}


}
