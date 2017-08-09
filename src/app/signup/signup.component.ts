import { Component } from '@angular/core';
import { FirebaseService } from '../services/auth.service';

import { User } from '../models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

//TODO: Add the firebase rejections to validate
export class SignupComponent {
	public errors: any = {}; //This one is public so that angular can access it
	model: any = {}; //Model that angular will store data in
	user: User; //User that we will send to the database

	validate(){
		this.errors = {};
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
	onSubmit(){
		if(this.validate()){//If there are errors, do not submit the form
			return;
		}
		this.user = new User(this.model.email, this.model.pass); //Create a new user object with the model email and password
		//Pass the user to the db here
		this.authService.signup(this.user);
	}
	constructor(private authService: FirebaseService){}
}
