import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public loginResponse: any;

 public clear(): void {
   this.loginResponse = undefined
 }

 public isAuthenticated(): boolean {
   console.log(this.loginResponse)
   return Boolean(this.loginResponse?.data)
 }
}
