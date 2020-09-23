import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService{

    alertSubject: Subject<Alert> = new Subject<Alert>();
    private keepAfterChange: boolean

    constructor(private router: Router){
        this.router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                if(this.keepAfterChange){
                    this.keepAfterChange = false;
                }
                else{
                    this.clear()
                }
            }
        })
    }

    success(message: string, keepAfterChange = false){
        this.alert(AlertType.SUCCESS, message, keepAfterChange);
    }

    warning(message: string, keepAfterChange = false){
        this.alert(AlertType.WARNING, message, keepAfterChange);
    }

    danger(message: string, keepAfterChange = false){
        this.alert(AlertType.DANGER, message, keepAfterChange);
    }

    info(message: string, keepAfterChange = false){
        this.alert(AlertType.INFO, message, keepAfterChange);
    }

    private alert(alertType: AlertType, message: string, keepAfterChange: boolean){
        this.keepAfterChange = keepAfterChange;
        this.alertSubject.next(new Alert(alertType,message));
    }

    getAlert(){
        return this.alertSubject.asObservable();
    }

    clear(){
        this.alertSubject.next(null);
    }
}