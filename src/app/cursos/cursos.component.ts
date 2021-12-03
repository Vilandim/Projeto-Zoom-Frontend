import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceCursosService } from '../api-service-cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursosCategory: ApiServiceCursosService, private router: ActivatedRoute) { }

  readData: any
  coursesById: string [] = []

  courseCategoryId = this.router.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses(){
    this.cursosCategory.getAllCourses().subscribe(res => {
      console.log(res)
      this.readData = Object.values(res)
      this.readData.shift()
      this.readData = this.readData[0]
      console.log(this.readData)
      for(let data of this.readData){
        if(data.category.id == this.courseCategoryId){
          this.coursesById.push(data)
          console.log(this.coursesById)
        }
        this.readData = this.coursesById
        console.log(this.readData)
      }



    },
    error => {
      console.log(error)
    }
    )
  }

}
