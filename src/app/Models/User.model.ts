export class User  {
	
	constructor(public name: string,
		        public lastName: string,
		        public email: string,
		        public drinkPreference : string,
		        public hobbies?: string[]
		        ) 
	{}
}