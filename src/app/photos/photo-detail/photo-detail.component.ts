import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoComment } from './photo-comments/photo-comment';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl:'./photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit{
    
    photo$: Observable<Photo>;
    photoId: number;

    constructor(
        private route: ActivatedRoute, 
        private photoService: PhotoService, 
        private router: Router
    ){}
    
    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId
        this.photo$ = this.photoService.fingById(this.photoId);
    }

    remove(){
        this.photoService.removePhoto(this.photoId).subscribe(() => this.router.navigate(['']));
    }
}