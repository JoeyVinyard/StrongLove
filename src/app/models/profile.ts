export class Profile{
	constructor(public uid: string,
				public username: string,
				public name: string,
				public gender: string,
				public imglink: string,
				public about: string,
				public city: string,
				public hobbies: string[],
				public age: number,
				public langs: string[],
				public prefgender: string,
				public contact: string){}
}