import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { MainFrameComponent } from './layout/main-frame/main-frame.component';
import { AddCompanyComponent } from './pages/add-company/add-company.component';

export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'user-dashboard',component:UserDashboardComponent
    },
    {
        path:'add-company',component:AddCompanyComponent
    },
    
];
