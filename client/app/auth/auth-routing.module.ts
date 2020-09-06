import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NgxLoginComponent } from '@auth/login/login.component'
import { NgxRegisterComponent } from '@auth/register/register.component'

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        // component: NbLoginComponent,
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        // component: NbRegisterComponent,
        component: NgxRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }