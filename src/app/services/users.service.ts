import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsersService{
	createUser(p: Profile){
		this.afd.database.ref('users/' + p.username).set(p)
	}
	constructor(private afd: AngularFireDatabase, private router: Router){}
}