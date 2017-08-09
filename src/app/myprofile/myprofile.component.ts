import { Component } from '@angular/core';
import { UsersService } from '../services/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent{
	model = {name: "", city: "", about: "", langs: "", hobbies: ""};

	//Add constructor for any services we will need
	//Add the imports for services you use etc.
	//Add function to handle toggling of edit/view
	//Add function for submitting data 
	//In our users.service, add a function for putting instead of just setting
}
