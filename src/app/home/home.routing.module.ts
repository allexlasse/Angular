import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/auth/login.guard';
import { HomeComponent } from './home.component';
import { SignInModule } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [

    {
        //rota home
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children:[
            //Rota signIn
            {path: '', component: SignInModule, data:{title:'Sign In'}},
            //Rota do SignUp
            {path: 'signup', component: SignUpComponent, data:{title:'Sign Up'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}