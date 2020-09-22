import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from './photo-comment';

@Component({
    selector:  'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.css']
})
export class PhotoCommentsComponent implements OnInit{
    
    @Input() photoId: number;
    comment$: Observable<PhotoComment[]>;
    commentForm: FormGroup;

    constructor(private photoService: PhotoService, private formBuilder: FormBuilder){}
    
    ngOnInit(): void {
        this.comment$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['',Validators.maxLength(300)]
        });
    }

    save(){
        const comment = this.commentForm.get('comment').value as string;
        this.comment$ = this.photoService
            .addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => this.commentForm.reset()))
        console.log("SALVOU O COMENTÁRIO");
    }
}