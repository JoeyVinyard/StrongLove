import { Component } from '@angular/core';
import { FirebaseService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
	title = "<strong>Love</strong>"
	authed(){
		console.log("test");
		return this.fbs.isAuthed();
	}
	signout(){
		this.fbs.signout();
	}
	constructor(private fbs: FirebaseService){

	}
}