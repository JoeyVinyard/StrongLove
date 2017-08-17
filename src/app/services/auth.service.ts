import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirebaseService{
	authState;
	uid;
	authed;

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
		this.af.auth.setPersistence('local').then(() => {
			this.af.auth.signInWithEmailAndPassword(user.email, user.password)
			.then(() => {
				this.router.navigateByUrl('/');
			})
			.catch((error) => {
				console.log(error);
			})
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
	getUid(){
		return this.uid;
	}

	queryByUser(uid, callback, comp){
			console.log(uid);
			this.afd.database.ref('/users').orderByChild('uid').equalTo(uid).on("value", function(snapshot){
				console.log(snapshot.val())
				var key = Object.keys(snapshot.val())[0]
				console.log(key);
				callback(snapshot.val()[key], comp);
			})
	}
	
	constructor(private afd: AngularFireDatabase, private af: AngularFireAuth, private router: Router){
		//Subscribe to the firebase authentications tate
		this.af.authState.subscribe((authState) => {
			//Sets our class variable authstate to the authstate provided by angularfire
			this.authState = authState
		})
		this.af.auth.onAuthStateChanged((authData) => {
			this.uid=authData.uid;
		})
	}
}