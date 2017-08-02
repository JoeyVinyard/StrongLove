import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService{
	af: AngularFireAuth;
	signup(user: User){
		this.af.auth.createUserWithEmailAndPassword(user.email,user.password);
	}
	constructor(private angularfire: AngularFireAuth){
		this.af = angularfire;
	}
}