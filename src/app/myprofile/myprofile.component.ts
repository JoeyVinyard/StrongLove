import { Component } from '@angular/core';
import { UsersService } from '../services/users.service'
import { Profile } from '../models/profile'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FirebaseService } from '../services/auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent{
	model: any = {};
	user: any = {};
	isEditing;
	myprocomp;
	hobbies;
	langs;

	//Add constructor for any services we will need
	//Add the imports for services you use etc.
	//Add function to handle toggling of edit/view
	//Add function for submitting data 
	//In our users.service, add a function for putting instead of just setting
	setUser(prof, comp){
		console.log(prof, comp);
		comp.model = new Profile(prof.uid, prof.username, prof.name,
		prof.gender, prof.imglink, prof.about, prof.city, prof.hobbies,
		prof.age, prof.langs, prof.prefgender, prof.contact);
		comp.hobbies = comp.model.hobbies.join(" ");
		comp.langs = comp.model.langs.join(" ");
		console.log(comp.hobbies);
	}

	setEdit(){
		this.isEditing=true;

	}

	setEdited(){
		this.isEditing=false;
	}

	split(){
		this.model.hobbies = this.hobbies.split(" ");
		this.model.langs = this.langs.split(" ");
	}

	editing(){
		return this.isEditing;
	}

	onSubmit(){
		this.us.updateUser(new Profile(this.as.getUid(), this.model.username, this.model.name, this.model.gender,
		 this.model.imglink, this.model.about, this.model.city, this.model.hobbies,
		 this.model.age, this.model.langs, this.model.prefgender, this.model.contact));
		this.setEdited();
	}
	

	constructor(private fbs: FirebaseService, private route: ActivatedRoute,
				private router: Router, private us: UsersService, private as: FirebaseService){
		// this.fbs.getUid();
		// console.log(this.fbs.getUid());
		this.myprocomp = this;

		this.route.params.subscribe((params) => {
		    this.fbs.queryByUser(this.fbs.getUid(), this.setUser, this.myprocomp);
		})

		
	}
}
