import { LoginServiceService } from './login-service.service';
import { Injectable, Inject, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginServiceService) {}



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    request = request.clone({
      headers: request.headers.set('authorization', `Bearer: ${this.loginService.getToken()}` )

    })
    console.log(request);

    return next.handle(request);

  }
}

