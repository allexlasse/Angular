import { NgModule } from '@angular/core';
import { DarkenOnHoverDirectve } from './darken-on-hover.directive';

@NgModule({
    declarations: [DarkenOnHoverDirectve],
    exports: [DarkenOnHoverDirectve]
})
export class DarkenOnHoverModule{}