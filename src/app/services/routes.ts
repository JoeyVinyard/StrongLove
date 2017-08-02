import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { MyprofileComponent } from '../myprofile/myprofile.component'
import { MatchesComponent } from '../matches/matches.component';
import { SplashComponent } from '../splash/splash.component';
import { PublicprofileComponent } from '../publicprofile/publicprofile.component';
import { MessageComponent } from '../message/message.component';

export const routes = [
	{
        path: 'signin',
        component: SigninComponent
      },
      {
      	path: 'signup',
      	component: SignupComponent
      },
      {
      	path: 'myprofile',
          component: MyprofileComponent
     },
     {
        path: 'user',
        component: PublicprofileComponent
     },
     {
        path: 'message',
        component: MessageComponent
     },
     {
        path: '',
        component: SplashComponent
     },
     {
       path: 'matches',
       component: MatchesComponent
     }
]