import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './signin/signin.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'signin',
        component: SigninComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
