import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JWTService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Intercepts all http requests
        // Modify request here for adding headers, logs, caching etc
        // console.log(req);
        // const authReq = req.clone({headers: req.headers.set('Content-Type','application/json')});
        // console.log(authReq);        
        return next.handle(req);
    }
}
