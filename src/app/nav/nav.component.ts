import { Component } from '@angular/core';
import { FirebaseService } from '../services/auth.service';
import { UsersService } from '../services/users.service'
import { Router } from '@angular/router';



@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
	title = "<strong>Love</strong>"
	authed(){
		
		return this.fbs.isAuthed();
	}
	signout(){
		this.fbs.signout();
	}
	
	constructor(private fbs: FirebaseService){

	}
}