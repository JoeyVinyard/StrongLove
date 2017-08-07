import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

import { Profile } from '../models/profile'

@Component({
  selector: 'app-publicprofile',
  templateUrl: './publicprofile.component.html',
  styleUrls: ['./publicprofile.component.css']
})
export class PublicprofileComponent implements OnInit {
	activeId = 1;

	change(id: number){
		console.log("changing to: ", id);
		this.activeId = id;
	}
  constructor(private us: UsersService) { }

  ngOnInit() {
    console.log(this.us.getUserInfo("bobbert"))
  }

}
