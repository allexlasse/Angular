import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';


const routes: Routes = [
    //Para dividir o carregamento de rotas:
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'home'
    },
     //Home e rotas filhas -> Lazy loading
    {
        path: 'home',
        loadChildren:'./home/home.module#HomeModule'
    },
    //Rota do user
    {
        path: 'user/:userName', 
        component: PhotoListComponent, 
        resolve:{photos: PhotoListResolver},
        data:{title:'TimeLine'}
    },
    //Rota para adc foto
    {
        path: 'p/add', 
        component: PhotoFormComponent, 
        canActivate:[AuthGuard],
        data:{title:'Upload'}
    },
    //Rota para Detalhes da foto
    {
        path: 'p/:photoId', 
        component: PhotoDetailComponent,
        data:{title:'Details'}
    },
    //Rota "default" -> NotFound
    { 
        path: 'error', 
        component: GlobalErrorComponent,
        data:{title:'Error'}
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent,
        data:{title:'Not Found'}
    },
    { 
        path: '**', 
        redirectTo: 'not-found' 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule{}