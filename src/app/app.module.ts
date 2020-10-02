/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbAlertModule, NbButtonModule,
  NbChatModule, NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule, NbInputModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {NgxLoginComponent} from "./auth/login.component";
import {FormsModule} from "@angular/forms";
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy, NbTokenStorage} from "@nebular/auth";
import {PageMenuResolve} from "./pages/page-menu.resolve";


@NgModule({
  declarations: [
    AppComponent,
    NgxLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'auth',
          baseEndpoint: 'http://203.246.113.171:8000',
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
          refreshToken: {
            endpoint: 'refresh_token',
            method: 'get',
          },
          login: {
            endpoint: '/api-token-auth/',
            method: 'post'
          }
        }),
      ],
      forms: {
        login: {
          redirectDelay: 300,
          showMessages: {
            success: true,
          },
          strategy: 'auth',
        },
      },
    }),
  ],
  providers: [
    PageMenuResolve,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
