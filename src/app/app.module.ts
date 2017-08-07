import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth'

import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MyprofileComponent } from './myprofile/myprofile.component'
import { MatchesComponent } from './matches/matches.component';
import { SplashComponent } from './splash/splash.component';
import { PublicprofileComponent } from './publicprofile/publicprofile.component';
import { MessageComponent } from './message/message.component';

import { FirebaseService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

//Importing an array of routes from the ts file
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
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirebaseService,
    AngularFireAuth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
