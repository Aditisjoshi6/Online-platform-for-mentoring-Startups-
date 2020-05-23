import { MdesigBoxComponent } from './mdesig-box/mdesig-box.component';
import { UsersService } from './users.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminMentorsComponent } from './admin-mentors/admin-mentors.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { MentorSidebarComponent } from './mentor-sidebar/mentor-sidebar.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorNotificationComponent } from './mentor-notification/mentor-notification.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MentorFeedbackComponent } from './mentor-feedback/mentor-feedback.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ITcsComponent } from './itcs/itcs.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { MentorFormComponent } from './mentor-form/mentor-form.component';
import { FaqComponent } from './faq/faq.component';
import { StartupRegisterComponent } from './startup-register/startup-register.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { ApproveComponent } from './approve/approve.component';
import { HttpClientModule } from '@angular/common/http';
import { MentorUploadsComponent } from './mentor-uploads/mentor-uploads.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MdialogBoxComponent } from './mdialog-box/mdialog-box.component';
import { MskillsBoxComponent } from './mskills-box/mskills-box.component';
import { MguidelinesBoxComponent } from './mguidelines-box/mguidelines-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomepageComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    AdminMentorsComponent,
    AdminUsersComponent,
    MentorSidebarComponent,
    MentorProfileComponent,
    MentorNotificationComponent,
    MentorFeedbackComponent,
    UserPageComponent,
    UserSidebarComponent,
    UserProfileComponent,
    AboutusComponent,
    ForgotpasswordComponent,
    ITcsComponent,
    AgricultureComponent,
    UserFeedbackComponent,
    MentorFormComponent,
    FaqComponent,
    StartupRegisterComponent,
    KnowmoreComponent,
    ApproveComponent,
    MentorUploadsComponent,
    DialogBoxComponent,
    MdialogBoxComponent,
    MskillsBoxComponent,
    MdesigBoxComponent,
    MguidelinesBoxComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    MatInputModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule, 
    MatButtonModule
    
  ],
  providers: [ UsersService ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogBoxComponent,
    MdialogBoxComponent,
    MdesigBoxComponent,
    MskillsBoxComponent,
    MguidelinesBoxComponent
],
 
  
})
export class AppModule { }
