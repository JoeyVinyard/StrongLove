import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database';

import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MyprofileComponent } from './myprofile/myprofile.component'

import { SplashComponent } from './splash/splash.component';
import { PublicprofileComponent } from './publicprofile/publicprofile.component';
import { MessageComponent } from './message/message.component';

import { FirebaseService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UsersService } from './services/users.service';

//Importing an array of routes from the ts file
import { routes } from './services/routes';
import { CreateprofileComponent } from './createprofile/createprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SigninComponent,
    SignupComponent,
    MyprofileComponent,
    SplashComponent,
    PublicprofileComponent,
    MessageComponent,
    CreateprofileComponent
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
    AngularFireDatabase,
    UsersService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
