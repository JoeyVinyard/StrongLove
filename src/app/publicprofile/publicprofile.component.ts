import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Profile } from '../models/profile'

@Component({
  selector: 'app-publicprofile',
  templateUrl: './publicprofile.component.html',
  styleUrls: ['./publicprofile.component.css']
})
export class PublicprofileComponent {
     modelProfile: any = {};
	activeId = 1;
     hobbies = [];
     langs = [];

	change(id: number){
		console.log("changing to: ", id);
		this.activeId = id;
	}
    constructor(private route: ActivatedRoute, private router: Router, private us: UsersService) {
      this.route.params.subscribe((params) => {
          this.us.getUserInfo(params.id).then((prof) => {
            //todo replace blank string
            this.modelProfile = new Profile("", prof.username, 
              prof.name, prof.gender, 
              prof.imglink, prof.about, 
              prof.city, prof.hobbies, 
              prof.age, prof.langs, 
              prof.prefgender, prof.contact);
            
            this.hobbies = prof.hobbies;
            this.langs = prof.langs;
        })
      })
  }
}
