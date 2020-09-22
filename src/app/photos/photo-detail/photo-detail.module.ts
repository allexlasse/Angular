import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { PhotoDetailComponent } from './photo-detail.component';

@NgModule({
    declarations: [PhotoDetailComponent],
    exports: [PhotoDetailComponent],
    imports: [CommonModule, PhotoModule]
})
export class PhotoDetailModule{}