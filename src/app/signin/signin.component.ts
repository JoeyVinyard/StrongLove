import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/auth.service';

import { User } from '../models/user'


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  public errors = {email: "", pass: "", confpass: ""}; //This one is public so that angular can access it
  model = {email: "", pass: "", confpass: ""}; //Model that angular will store data in
  user: User; //User that we will send to the database
  fbs: FirebaseService;

  validate(){
  	this.errors = {email: "", pass: "", confpass: ""};
  	if(!this.model.email)
  		this.errors.email="Please provide an email";
  	if(!this.model.pass)
  		this.errors.pass="Please provide a password";
  	
  	return(this.errors.email || this.errors.pass || this.errors.confpass); //Returns true if there are errors
  }
  onSubmit(){
  	if(this.validate()){//If there are errors, do not submit the form
  		return;
  	}

  	// this.fbs.signin(this.user);
  }

  constructor(private firebase: FirebaseService){
  	this.fbs = firebase;
  }

}
