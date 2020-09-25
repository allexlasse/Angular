import { Component } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
    selector:'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls:['menu.component.css']
    
})
export class MenuComponent{
    isShown = false;

    toggle(){
        this.isShown = !this.isShown;
    }
}