import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  apiUrl='http://localhost:3333/api/users'



  //create data

  createData(data:any): Observable<any>{
    console.log(data, "created")
    return this.http.post(this.apiUrl, data)
  }
}

