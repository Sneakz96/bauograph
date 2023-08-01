import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/components/home/home.component';
import { LoginComponent } from './frontend/components/auth/login/login.component';
import { SideNavComponent } from './frontend/components/nav/side-nav/side-nav.component';
import { NavbarComponent } from './frontend/components/nav/navbar/navbar.component';
import { UserListComponent } from './frontend/components/user/user-list/user-list.component';
import { EditUserComponent } from './frontend/components/user/edit-user/edit-user.component';
import { AddUserComponent } from './frontend/components/user/add-user/add-user.component';
import { UserOverviewComponent } from './frontend/components/user/user-overview/user-overview.component';
import { ProfileComponent } from './frontend/components/profile/profile.component';
import { BoardComponent } from './frontend/components/board/board.component';
import { DataProtectionComponent } from './frontend/components/utility/data-protection/data-protection.component';
import { SettingsComponent } from './frontend/components/settings/settings.component';
import { ImprintComponent } from './frontend/components/utility/imprint/imprint.component';
import { AddTaskComponent } from './frontend/components/task/add-task/add-task.component';
import { UserDetailsComponent } from './frontend/components/user/user-details/user-details.component';
import { RegisterComponent } from './frontend/components/auth/register/register.component';
import { ForgotPasswordComponent } from './frontend/components/auth/forgot-password/forgot-password.component';
import { CompanyOverviewComponent } from './frontend/components/company/company-overview/company-overview.component';
import { CreateCompanyComponent } from './frontend/components/company/create-company/create-company.component';
import { MyCompanyComponent } from './frontend/components/company/my-company/my-company.component';
import { CookiesComponent } from './frontend/components/utility/cookies/cookies.component';
import { ProjectOverviewComponent } from './frontend/components/projects/project-overview/project-overview.component';
import { AddProjectComponent } from './frontend/components/projects/add-project/add-project.component';
// NGRX
import { StoreModule } from '@ngrx/store';
// MODULES
import { MaterialModule } from './frontend/modules/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
// SERVICES
import { UserService } from './frontend/services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllCompaniesComponent } from './frontend/components/company/all-companies/all-companies.component';
import { CompanyDetailsComponent } from './frontend/components/company/company-details/company-details.component';
import { AuthService } from './frontend/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// BACKEND

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    DataProtectionComponent,
    BoardComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent,
    LoginComponent,
    AddTaskComponent,
    SideNavComponent,
    NavbarComponent,
    HomeComponent,
    UserOverviewComponent,
    ProfileComponent,
    SettingsComponent,
    UserDetailsComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CompanyOverviewComponent,
    CreateCompanyComponent,
    MyCompanyComponent,
    CookiesComponent,
    ProjectOverviewComponent,
    AddProjectComponent,
    AllCompaniesComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    AddUserComponent,
    SideNavComponent,
    UserService,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
