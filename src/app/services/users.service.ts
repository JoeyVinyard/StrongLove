import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsersService{
	createUser(p: Profile){
		this.afd.database.ref('users/' + p.username).set(p)
		//then
		//catch
		//TODO: Add promise here to catch for errors, and to redirect to matches or something
	}
	getUserInfo(username: string){
		//Returns promise with the snapshot of the user data
		return this.afd.database.ref('users/' + username).once('value').then(function(s) {
			return s.val();
		});
	}

	
	constructor(private afd: AngularFireDatabase, private router: Router){}
}