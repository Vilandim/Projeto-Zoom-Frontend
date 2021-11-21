import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceProfService {

  constructor(private http: HttpClient) { }


  apiUrlGeneralUser='http://localhost:3333/api/users'

  apiUrlTeacherUser= 'http://localhost:3333/api/teachers'

  //Create Teacher Data - Step 1
  createDataUser(data:any): Observable<any>{
    console.log(data, "created")
    return this.http.post(this.apiUrlGeneralUser, data)
  }

//Create Teacher Data - Step 2
  createDataTeacher(data:any): Observable<any>{
    console.log(data, 'created teacher data')
    return this.http.post(this.apiUrlTeacherUser, data)
  }
}


