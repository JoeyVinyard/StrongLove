import { Component } from '@angular/core';

import { UsersService } from '../services/users.service'
import { FirebaseService } from '../services/auth.service';

import { Profile } from '../models/profile'

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent{
	model: any = {};
	//Langs and hobbies are intermediary variables that we use in the split() function
	langs = "";
	hobbies = "";

	split(){
		//Splits the strings into arrays so we can store them as such in firebase
		this.model.hobbies = this.hobbies.split(" ");
		this.model.langs = this.langs.split(" ");
	}
	onSubmit(){
		//TODO replace blank string
		this.us.createUser(new Profile(this.as.getUid(), 
			this.model.username, 
			this.model.name, 
			this.model.gender, 
			this.model.imglink, 
			this.model.about, 
			this.model.city, 
			this.model.hobbies, 
			this.model.age, 
			this.model.langs, 
			this.model.prefGender));
	}

	constructor(private us: UsersService, private as: FirebaseService) { }
}
