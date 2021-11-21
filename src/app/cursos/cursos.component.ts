import { Component, OnInit } from '@angular/core';
import { ApiServiceCursosService } from '../api-service-cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursosCategory: ApiServiceCursosService) { }

  readData: any

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

    })
  }

}
