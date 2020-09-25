import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInModule implements OnInit{

    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formbBuilder: FormBuilder,
                private authService: AuthService, 
                private router: Router,
                private platformDetectorService: PlatformDetectorService,
                private activatedRoute: ActivatedRoute
                ){}

    ngOnInit(): void {
        this.activatedRoute
            .queryParams
            .subscribe(params => this.fromUrl = params['fromUrl'])
        this.loginForm = this.formbBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }

    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(userName,password)
            .subscribe(() => {
                console.log("FOI");
                if(this.fromUrl){
                    this.router.navigateByUrl(this.fromUrl);
                }else{
                    this.router.navigate(['user', userName])
                }
            },
                err => {
                    console.log(">>>>>>>>>>>>>>>" + err)
                    this.loginForm.reset();
                    this.platformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                    alert("Tá errado isso ai");
                }
            )
    }
}