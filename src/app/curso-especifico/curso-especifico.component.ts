import { ApiServiceCursosService } from './../api-service-cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-curso-especifico',
  templateUrl: './curso-especifico.component.html',
  styleUrls: ['./curso-especifico.component.css']
})
export class CursoEspecificoComponent implements OnInit {

  constructor(private courseService: ApiServiceCursosService, private router: ActivatedRoute) { }

  id = this.router.snapshot.paramMap.get('id')

  readData: any
  classes: any
  classesByCourse: string[] = []

  ngOnInit(): void {
    this.getSingleCourse()
    this.getClasses()

  }

  getSingleCourse(){
    this.courseService.getSingleCourse(this.id).subscribe( res => {
      console.log(res)
      this.readData = Object.values(res)
      this.readData.shift()
      console.log(this.readData)


    })
  }

  getClasses(){
    this.courseService.getClasses().subscribe(res => {
      this.classes = Object.values(res)
      this.classes.shift()
      this.classes = this.classes[0]
      console.log(this.classes)
      for(let data of this.classes){
        if(data.course.id == this.id){
          this.classesByCourse.push(data)
          console.log(this.classesByCourse)
      }
        this.classes = this.classesByCourse

    }


    },
    error => {
      console.log(error)
    }
    )
  }

}
