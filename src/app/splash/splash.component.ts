import { Component } from '@angular/core';
import { FirebaseService } from '../services/auth.service';

import { User } from '../models/user';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.component.html',
	styleUrls: ['./splash.component.css']
})

export class SplashComponent{
	user: User;
	errors= {email: "", pass: "", confpass: ""}
	model= {email: "", pass: "", confpass: ""}

	validate(){
		this.errors = {email: "", pass: "", confpass: ""};
		if(!this.model.email)
			this.errors.email="Please provide an email";
		if(!this.model.pass)
			this.errors.pass="Please provide a password";
		if(!this.model.confpass)
			this.errors.confpass="Please confirm your password";
		if(this.model.confpass!=this.model.pass)
			this.errors.confpass="Passwords must match";
		return(this.errors.email || this.errors.pass || this.errors.confpass); //Returns true if there are errors
	}

	authed(){
		
		return this.fbs.isAuthed();
	}
	
	onSubmit(){
		if(this.validate()){//If there are errors, do not submit the form
			return;
		}
		this.user = new User(this.model.email, this.model.pass); //Create a new user object with the model email and password
		console.log(this.user);
		//Pass the user to the db here
		this.fbs.signup(this.user);
		console.log(this.fbs.isAuthed());
	}

	constructor(private fbs: FirebaseService) {}
}
