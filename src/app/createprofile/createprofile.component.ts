import { Component } from '@angular/core';

import { UsersService } from '../services/users.service'

import { Profile } from '../models/profile'

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent{
	model = {username: "", name: "", gender: "", prefGender: "", age: 0, city: "", about: "", langs: [""], hobbies: [""]};
	langs = "";
	hobbies = "";

	split(){
		this.model.hobbies = this.hobbies.split(" ");
		this.model.langs = this.langs.split(" ");
	}
	onSubmit(){
		this.us.createUser(new Profile(this.model.username, this.model.name, this.model.gender, this.model.about, this.model.hobbies, this.model.age, this.model.langs, this.model.prefGender));
	}

	constructor(private us: UsersService) { }
}
