import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminMentorsComponent } from './admin-mentors/admin-mentors.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { MentorSidebarComponent } from './mentor-sidebar/mentor-sidebar.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorNotificationComponent } from './mentor-notification/mentor-notification.component';
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
import { MentorUploadsComponent } from './mentor-uploads/mentor-uploads.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MdialogBoxComponent } from './mdialog-box/mdialog-box.component';
import { MdesigBoxComponent } from './mdesig-box/mdesig-box.component';
import { MskillsBoxComponent } from './mskills-box/mskills-box.component';
import { MguidelinesBoxComponent } from './mguidelines-box/mguidelines-box.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin-mentors',
    component: AdminMentorsComponent
  },
  {
    path: 'admin-users',
    component: AdminUsersComponent
  },
  {
    path: 'mentor-profile',
    component: MentorProfileComponent
  },
  {
    path: 'mentor-sidebar',
    component: MentorSidebarComponent
  },
  {
    path: 'mentor-notifications',
    component: MentorNotificationComponent
  },
  {
    path: 'mentor-feedback',
    component: MentorFeedbackComponent
  },
  {
    path: 'user-page',
    component: UserPageComponent
  },
  {
    path: 'user-sidebar',
    component: UserSidebarComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'itcs',
    component: ITcsComponent
  },
  {
    path: 'agriculture',
    component: AgricultureComponent
  },
  {
    path: 'user-feedback',
    component: UserFeedbackComponent
  },
  {
    path: 'mentor-form',
    component: MentorFormComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'startup-register',
    component: StartupRegisterComponent
  },
  {
    path: 'knowmore',
    component: KnowmoreComponent
  },
  {
    path: 'approve',
    component: ApproveComponent
  },
  {
    path: 'mentor-uploads',
    component: MentorUploadsComponent
  },
  {
    path: 'dialog-box',
    component: DialogBoxComponent
  },
  {
    path: 'mdialog-box',
    component: MdialogBoxComponent
  },
  {
    path: 'mdesig-box',
    component: MdesigBoxComponent
  },
  {
    path: 'mskills-box',
    component: MskillsBoxComponent
  },
  {
    path: 'mguidelines-box',
    component: MguidelinesBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
