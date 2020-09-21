import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { UserInterface } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class UserService{

    private userSubject = new BehaviorSubject<UserInterface>(null);
    private userName: string;

    constructor(private tokenService: TokenService){
        this.tokenService.hasToken() && this.decodeAndNotify(); //truque de js - Se o primeiro for verdadeiro, ele executará o segundo. Ou seja, se houver um token, ele irá decodificar e notificar

    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as UserInterface;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logOut(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    getUserName(){
        return this.userName;
    }
}