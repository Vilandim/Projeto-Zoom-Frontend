import { LoginServiceService } from './login-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
  constructor(private loginService: LoginServiceService, private router: Router){}

  canActivate(): any {

    if(this.loginService.loggedIn()){
      return true
    } else {
      this.router.navigate(["/login"])
      return false
    }
  }

  }


