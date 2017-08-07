import { Component } from '@angular/core';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent{
	model = {name: "", city: "", about: "", langs: "", hobbies: ""};

	onSubmit(){
		console.log(this.model);
	}

	constructor() { }
}
