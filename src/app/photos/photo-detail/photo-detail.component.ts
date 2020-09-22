import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl:'./photo-detail.component.html',
    styleUrls: ['photo-detail.css']
})
export class PhotoDetailComponent implements OnInit{
    
    photo$: Observable<Photo>;
    constructor(private route: ActivatedRoute, private photoService: PhotoService){}
    
    ngOnInit(): void {
        this.photo$ = this.photoService.fingById(this.route.snapshot.params.photoId)
    }
}