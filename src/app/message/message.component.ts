import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{
	matches;
	matchesPromise;
	currentUser;

	setMatches(matches, component){
		component.matchesPromise = new Promise((resolve, reject) => {
			component.matches = matches;
			resolve(matches);
		});
	}

	showUser(uid){
		this.currentUser=this.matches.find(function(match){
			return match.uid==uid;
		})
		console.log(this.currentUser)

	}

	populateField(uid){

	}

	goToGitHub(location) {
    window.location.href='location';
}

	

  constructor(private us: UsersService) {
	 this.us.getMatches(this.setMatches, this);
  }



}
