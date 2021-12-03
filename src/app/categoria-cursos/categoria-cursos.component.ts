import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceCursosService } from '../api-service-cursos.service';

@Component({
  selector: 'app-categoria-cursos',
  templateUrl: './categoria-cursos.component.html',
  styleUrls: ['./categoria-cursos.component.css']
})
export class CategoriaCursosComponent implements OnInit {

  constructor(private cursosCategoryService: ApiServiceCursosService, private route: ActivatedRoute) { }

  readData: any;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.getSingleData(id)
    }


    getSingleData(id:any){
      this.cursosCategoryService.getSingleData(id).subscribe(res =>{
        console.log(res)
        this.readData = Object.values(res)
        this.readData.shift()
        console.log(this.readData)
          })
    }
  }





