import { IDeleteController } from './../../../../backend/naosabemosumnome_backend/src/controllers/questionController/delete/IDeleteController';
import { LoginServiceService } from './../login-service.service';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { ApiServiceCursosService } from './../api-service-cursos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
    public isCollapsed = false

    keyword = 'name';
    data : any;
    auth: boolean = false

    type: any

    userId: any






  constructor(private serviceCursos: ApiServiceCursosService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit(): void {


    if(this.loginService.loggedIn()){
       this.auth = true
       this.getPersonalData()


    }
    else{
      this.auth = false
    }

  }

  getData(){
   this.serviceCursos.getAllCourses().subscribe(res => {
     console.log(res)
     this.data = Object.values(res)
     this.data.shift()
     this.data = this.data[0]
   })
  }

  Onsubmit(entry:any) {

   if(entry == "Desenvolvimento Web"){
     console.log(entry)
      this.router.navigate(["/curso-especifico"])


   }
   else{
     console.log(entry)
     this.router.navigate(['/sobre'])
   }



  }

  logOut(){
    this.loginService.loggedOut()
    window.location.reload()
  }

  getPersonalData(){
    this.loginService.getPersonalData().subscribe(res =>{
      console.log(res)
      if(res.data.type == 'aluno'){
        this.type = 'aluno'
      }
      else{
        this.type = 'professor'
      }

      this.userId = res.data.id
      console.log(this.userId)

    })
  }
}
