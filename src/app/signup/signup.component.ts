import { Component } from '@angular/core';

import { User } from '../models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	user;
	public errors = {email: "", pass: "", confpass: ""};
	model = {email: "", pass: "", confpass: ""};

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
	onSubmit(){
		console.log("Attempting to submit");
		if(this.validate()){
			console.log("Failed to submit, errors");
			return;
		}
		this.user = new User(this.model.email, this.model.pass);
		console.log(this.user.email, this.user.password);
		console.log("submitted");
		//Pass user to db
	}
}
