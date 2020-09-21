import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignInModule } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [

    {
        //rota home
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children:[
            //Rota signIn
            {path: '', component: SignInModule},
            //Rota do SignUp
            {path: 'signup', component: SignUpComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}