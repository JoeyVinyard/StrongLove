import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from './auth.service';

@Injectable()
export class UsersService{
	createUser(p: Profile){
		this.afd.database.ref('users/' + p.username).set(p)
		.then(() => {
			this.router.navigateByUrl('/myprofile');
		})
		.catch((error) => {
			console.log(error);
		})
		//catch
		//TODO: Add promise here to catch for errors, and to redirect to matches or something

	}
	updateUser(p: Profile){
		console.log(p);
		this.afd.database.ref('users/' + p.username).update(p)
		.then(() => {
			
		})
		.catch((error) => {
			console.log(error);
		})
		//catch
		//TODO: Add promise here to catch for errors, and to redirect to matches or something

	}

	getUserList(){
		return this.afd.database.ref('users').once('value').then(function(s){
			return s.val();
		})

	}
	getMatches(callback, matchesComponent){

		this.getUserList().then((s)=>{

			var keys = Object.keys(s);
			var users = [];

			keys.forEach(function(key){
				users.push(s[key])
			})
			// console.log(users);
			this.fbs.queryByUser(this.fbs.getUid(), function(user, component){
				var matches = [];
				users.forEach(function(person){
				  user.langs.forEach(function(lang){
				    if(person.langs.includes(lang)  && person.gender == user.prefgender && component.fbs.getUid() != person.uid && !matches.includes(person)){
				      matches.push(person);
				      // console.log(person.username,"matched on",lang)
				    }
				  })
				})
				callback(matches, matchesComponent);
				// console.log(matches);

			},this);
		})
	}

	getUserInfo(username: string){
		//Returns promise with the snapshot of the user data
		return this.afd.database.ref('users/' + username).once('value').then(function(s) {
			return s.val();
		});
	}


	
	constructor(private afd: AngularFireDatabase, private router: Router, private fbs: FirebaseService){}
}