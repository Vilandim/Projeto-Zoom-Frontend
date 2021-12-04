import { LoginServiceService } from './../login-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceCursosService } from './../api-service-cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  constructor(private courseService: ApiServiceCursosService, private formBuilder: FormBuilder, private loginService: LoginServiceService, private router: ActivatedRoute, private routering: Router) { }


  userId = this.router.snapshot.paramMap.get('id')

 errorMessage: any
 successMessage: any

  ngOnInit(): void {


  }

  courseForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    category: [null, Validators.required],
    certificated: [true],
    user: [this.userId]

  })




  createCourse(){
    if(this.courseForm.valid){
    this.courseService.createCourse(this.courseForm.value).subscribe(res =>{
      console.log(res)
      this.successMessage = "Aula criada com sucesso!"

      setTimeout(() => this.routering.navigate([`criar-aula/${this.userId}`]), 3000)
    },
    error =>{
      console.log(error)
    })
  }else{
    this.errorMessage = "Preencha os campos corretamente!"
  }
  }





}
