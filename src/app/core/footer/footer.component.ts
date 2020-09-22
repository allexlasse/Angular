import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{

    user$: Observable<UserInterface>

    constructor(private userService: UserService){}

    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }


}