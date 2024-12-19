import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard } from './core/guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"auth",
        pathMatch:"full"
    },
    {
        path:"home",
        component:HomeComponent,
        canActivate:[authGuard]
    },
    {
        path:"auth",
        component:LoginComponent
    }
];
