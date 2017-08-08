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

	
}
