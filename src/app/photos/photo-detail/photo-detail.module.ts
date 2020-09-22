import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailComponent } from './photo-detail.component';

@NgModule({
    declarations: [PhotoDetailComponent, PhotoCommentsComponent],
    exports: [PhotoDetailComponent, PhotoCommentsComponent],
    imports: [
                CommonModule, 
                PhotoModule, 
                RouterModule, 
                ReactiveFormsModule,
                VMessageModule
            ]
})
export class PhotoDetailModule{}