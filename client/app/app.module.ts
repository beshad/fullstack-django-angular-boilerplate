import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { AuthModule } from '@app/auth/auth.module';
import { ThingsComponent } from '@app/things/things.component'

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from '@app/app.component'
import { BaseModule } from '@app/base/base.module'
import { AdminModule } from '@app/admin/admin.module'
import { UserModule } from '@app/user/user.module'

import { UserService } from '@app/user/user.service'
import { HomeComponent } from '@app/home/home.component'

import { AuthInterceptor } from './auth/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    ThingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    UserModule,
    BaseModule,
    AdminModule,
    CommonModule,
    AppRoutingModule, // AppRoutingModule must be last.
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
