import { LoginServiceService } from './../login-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceCursosService } from './../api-service-cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  constructor(private courseService: ApiServiceCursosService, private formBuilder: FormBuilder, private loginService: LoginServiceService) { }


  userData: any

  ngOnInit(): void {

    this.getUserData()
  }

  courseForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    category: [null, Validators.required],
    certificated: [true],
    user: [null]

  })




  createCourse(){
    this.courseService.createCourse(this.courseForm.value).subscribe(res =>{
      console.log(res)
    },
    error =>{
      console.log(error)
    })
  }

  getUserData(){
    this.loginService.getPersonalData().subscribe(res =>{
      console.log(res)
      this.userData = Object.values(res)
      this.userData.shift()
      this.userData = this.userData[0].id
      console.log(this.userData)

    })
  }
}
