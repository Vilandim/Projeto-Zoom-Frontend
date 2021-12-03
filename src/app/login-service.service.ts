import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly TOKEN = "TOKEN"
  loggedUser!: string

  apiUrl = '//localhost:3333/api/users/signIn'
  apiUrl2 = '//localhost:3333/api/users'

  constructor(private http: HttpClient) { }

  doLogin(dataRequest:any): Observable<any>{
    return this.http.post(this.apiUrl, dataRequest)

  }

  loggedIn(): boolean{
    if(localStorage.getItem('token') == 'example'){
      return false
    }
    return true
  }

  getToken(): any {
    if(localStorage.getItem('token') == null){
      localStorage.setItem('token', 'example')
    }
    return localStorage.getItem('token')
  }

  loggedOut(): any {
    localStorage.setItem('token', 'example')
  }


  getPersonalData(): Observable <any> {

    return this.http.get(`${this.apiUrl2}/id`)
  }

  deletePersonalData(id: any): Observable <any> {
    return this.http.delete(`${this.apiUrl2}/${id}`)
  }

  updateUserData(data:any): Observable <any> {
    return this.http.patch(this.apiUrl2, data)
  }



}


