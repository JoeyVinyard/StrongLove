export class Profile{
	constructor(public uid: string,
					public username: string,
					public name: string,
					public gender: string,
					public about: string,
					public hobbies: string[],
					public age: number,
					public langs: string[],
					public prefgender: string){}
}