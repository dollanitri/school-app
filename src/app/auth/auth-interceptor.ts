import {HTTP_INTERCEPTORS} from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

import {TokenStorageService} from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorageService) { }

    intercept (request: HttpRequest<any>, next: HttpHandler) {
        let authReq = request;

        const token = this.token.getToken();

        if(token != null) {
            authReq = request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
        }
        return next.handle(authReq);
    }

}

export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]