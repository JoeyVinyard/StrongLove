import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService{
	authState;

	signup(user: User){
		//Uses angularfire2 to create the user with the email and password from the User object
		this.af.auth.createUserWithEmailAndPassword(user.email,user.password)
		.then(() => {//We use fat arrow here so that the "this" keyword is still pointing to our class
			this.router.navigateByUrl('/createprofile');
		})
		.catch((error) => {
			console.log(error);
		})
	}
	signin(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.password)
		.then(() => {
			this.router.navigateByUrl('/myprofile');
		})
		.catch((error) => {
			console.log(error);
		})
	}
	signout(){
		this.af.auth.signOut()
		.then(() => {
			this.router.navigateByUrl('/');
		})
		.catch((error) => {
			console.log(error);
		})
	}
	isAuthed(){
		//Returns the authstate
		return !!this.authState; //Double bang is so that null becomes false
	}
	constructor(private af: AngularFireAuth, private router: Router){
		//Subscribe to the firebase authentications tate
		this.af.authState.subscribe((authState) => {
			//Sets our class variable authstate to the authstate provided by angularfire
			this.authState = authState
		})
	}
}