import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsersService{
	createUser(p: Profile){
		this.afd.database.ref('users/' + p.username).set(p)
	}
	getUserInfo(username: string){
		console.log(username);
		var p;
		this.afd.database.ref('users/' + username).once('value').then((s) => {
			var item = s.val()
			p = new Profile(item.username, item.name, item.gender, item.about, item.hobbies, item.age, item.langs, item.prefgender);
			console.log("yo");
			return p;
		})
		console.log("hi");
	}
	constructor(private afd: AngularFireDatabase, private router: Router){}
}