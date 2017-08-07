import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

import { Profile } from '../models/profile'

@Component({
  selector: 'app-publicprofile',
  templateUrl: './publicprofile.component.html',
  styleUrls: ['./publicprofile.component.css']
})
export class PublicprofileComponent {
     modelProfile = new Profile("","","","",[""],0,[""],"");
	activeId = 1;
  hobbies = [];
  langs = [];


	change(id: number){
		console.log("changing to: ", id);
		this.activeId = id;
	}
  constructor(private us: UsersService) {
    this.us.getUserInfo("asdlfjkh").then((prof) => {
      this.modelProfile = new Profile(prof.username, prof.name, prof.gender, prof.about, prof.hobbies, prof.age, prof.langs, prof.prefgender);
      this.hobbies = prof.hobbies;
      this.langs = prof.langs;
    })
  }
}
