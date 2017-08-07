import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
