import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';
import { AuthGuard } from '@app/auth/auth-guard.service';
import { AuthComponent } from '@auth/auth.component';

// nebular auth module
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { NgxLoginComponent } from '@auth/login/login.component'

import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbUserModule
} from '@nebular/theme';

export interface NbAuthSocialLink {
  link?: string,
  url?: string,
  target?: string,
  title?: string,
  icon?: string,
}

const socialLinks: NbAuthSocialLink[] = [];

@NgModule({
  declarations: [
    AuthComponent,
    NgxLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'access'
          },
          baseEndpoint: 'http://localhost:7000/',
          login: {
            endpoint: 'api/auth/login',
            method: 'post',
            redirect: {
              success: '/admin',
              failure: null, // stay on the same page
            },
          },
          logout: {
            endpoint: '',
          },
          resetPass: {
            endpoint: 'api/auth/password_reset',
            method: 'post',
          }
        })
      ]
    })
  ],
  providers: [
    AuthGuard
  ],
})

export class AuthModule { }