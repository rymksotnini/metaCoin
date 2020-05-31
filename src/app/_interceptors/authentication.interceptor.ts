import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams, HTTP_INTERCEPTORS, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../_services/authentication.service';
import {LocalService} from "../_services/local.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService,
              private localService: LocalService
              ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('in interceptor', this.authenticationService.isLogged());
    if(this.authenticationService.isLogged()) {
      const newRequest = request.clone(
        {
          headers: request.headers.append(
            'Authorization', 'Bearer '+this.localService.getJsonValue('token'))
        }
      );
      // console.log('request',newRequest);
      return next.handle(newRequest);

    }else {
      return next.handle(request);
    }
  }
}
export const AuthenticationInterceptorProvider = {
  provide:HTTP_INTERCEPTORS,
  useClass  :AuthenticationInterceptor,
  multi: true
};
