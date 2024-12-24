import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { MainFrameComponent } from './layout/main-frame/main-frame.component';
import { AddCompanyComponent } from './pages/add-company/add-company.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { DocumentStatusComponent } from './pages/document-status/document-status.component';
import { ProjectIncorporationsComponent } from './pages/project-incorporations/project-incorporations.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'user-dashboard', component: UserDashboardComponent
    },
    {
        path: 'add-company', component: AddCompanyComponent
    },
    {
        path: 'summary', component: SummaryComponent
    },
    {
        path: 'document-status', component: DocumentStatusComponent
    },
    {
        path: 'project-incorp', component: ProjectIncorporationsComponent
    },
    {
        path: 'admin-dashboard', component: AdminDashboardComponent
    },

];
