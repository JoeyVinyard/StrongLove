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

	setMatches(matches, component){
		component.matchesPromise = new Promise((resolve, reject) => {
			resolve(matches);
		});
	}

  constructor(private us: UsersService) {
	 this.us.getMatches(this.setMatches, this);
  }



}
