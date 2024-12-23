import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {
        path:'',component:UserDashboardComponent
    },
    {
        path:'login',component:LoginComponent
    },
    
];
