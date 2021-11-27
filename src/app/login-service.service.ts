import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly TOKEN = "TOKEN"
  loggedUser!: string

  apiUrl = '//localhost:3333/api/users/signIn'

  constructor(private http: HttpClient, private authService: AuthService) { }

  doLogin(dataRequest:any): Observable<any>{
    return this.http.post(this.apiUrl, dataRequest)

  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  getToken(): any {
    return localStorage.getItem('token')
  }

}


