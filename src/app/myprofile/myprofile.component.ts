import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent{
	model = {name: "", city: "", about: "", langs: "", hobbies: ""};

	onSubmit(){
		console.log(this.model);
	}

	constructor() { }
}
