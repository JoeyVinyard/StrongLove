import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MyprofileComponent } from './myprofile/myprofile.component'
import { MatchesComponent } from './matches/matches.component';
import { SplashComponent } from './splash/splash.component';
import { PublicprofileComponent } from './publicprofile/publicprofile.component';
import { MessageComponent } from './message/message.component';

import { routes } from './services/routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SigninComponent,
    SignupComponent,
    MyprofileComponent,
    MatchesComponent,
    SplashComponent,
    PublicprofileComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
