import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './frontend/components/home/home.component';
import { BoardComponent } from './frontend/components/board/board.component';
import { AddTaskComponent } from './frontend/components/task/add-task/add-task.component';
import { UserOverviewComponent } from './frontend/components/user/user-overview/user-overview.component';
import { ProfileComponent } from './frontend/components/profile/profile.component';
import { SettingsComponent } from './frontend/components/settings/settings.component';
import { AddUserComponent } from './frontend/components/user/add-user/add-user.component';
import { UserDetailsComponent } from './frontend/components/user/user-details/user-details.component';
import { LoginComponent } from './frontend/components/auth/login/login.component';
import { RegisterComponent } from './frontend/components/auth/register/register.component';
import { ForgotPasswordComponent } from './frontend/components/auth/forgot-password/forgot-password.component';
import { CompanyOverviewComponent } from './frontend/components/company/company-overview/company-overview.component';
import { MyCompanyComponent } from './frontend/components/company/my-company/my-company.component';
import { ProjectOverviewComponent } from './frontend/components/projects/project-overview/project-overview.component';
import { AddProjectComponent } from './frontend/components/projects/add-project/add-project.component';
import { CreateCompanyComponent } from './frontend/components/company/create-company/create-company.component';
import { AllCompaniesComponent } from './frontend/components/company/all-companies/all-companies.component';
import { CompanyDetailsComponent } from './frontend/components/company/company-details/company-details.component';
import { AuthGuard } from './frontend/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'board', component: BoardComponent },
  { path: 'add-task', component: AddTaskComponent },
  {
    path: 'contacts', component: UserOverviewComponent,
    children: [
      { path: ':refId', component: UserDetailsComponent },
      { path: 'add-user', component: AddUserComponent }
    ]
  },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'project/:refId', component: ProjectOverviewComponent },
  { path: 'create-company', component: CreateCompanyComponent },
  { path: 'companies', component: CompanyOverviewComponent },
  { path: 'all-companies/details', component: CompanyDetailsComponent },
  { path: 'all-companies', component: AllCompaniesComponent },
  { path: 'my-company', component: MyCompanyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
