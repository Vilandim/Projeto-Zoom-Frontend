import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceCursosService } from './../api-service-cursos.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-aula',
  templateUrl: './criar-aula.component.html',
  styleUrls: ['./criar-aula.component.css']
})
export class CriarAulaComponent implements OnInit {

  courses: any

  errorMessage: any
  successMessage: any

  constructor(private classService: ApiServiceCursosService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getCourses()
  }

  classForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    link: ['', Validators.required],
    course: ['', Validators.required]
  })

  getCourses(){
    this.classService.getAllCourses().subscribe(res =>{
      console.log(res)
      this.courses = Object.values(res)
      this.courses.shift()
      this.courses = this.courses[0]
      console.log(this.courses)

    })
  }

  createClass(){
    if(this.classForm.valid){
    this.classService.createClasses(this.classForm.value).subscribe(res => {
      console.log(res)
      this.successMessage = "Aula criada com sucesso!"
      setTimeout(() => window.location.reload(), 3000)
    })
  }else{
    this.errorMessage = "Preencha os campos corretamente!"
  }
  }

  exit(){
      this.router.navigate(['/'])
  }

}
