import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  apiUrl = '//localhost:3333/api/users/signIn'

  constructor(private http: HttpClient) { }

  doLogin(data:any): Observable<any>{
    return this.http.post(this.apiUrl, data)
  }
}
