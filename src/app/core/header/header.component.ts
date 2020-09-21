import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterface } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    user$: Observable<UserInterface>;//o $ em nome de variável é uma boa prática para identificar observables

    constructor(private userService: UserService, private router: Router){
        this.user$ = this.userService.getUser();
    }

    logOut(){
        this.userService.logOut();
        this.router.navigate(['']);
    }
}