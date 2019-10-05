import { User } from '../Models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
	
	private users: User[]= [
	new User('James', 'Smith', 'james@james.com', 'jus d\'orange', ['football', 'lecture'])
						];

	UserSubject= new Subject<User[]>();

emitUsers(){
		this.UserSubject.next(this.users.slice());
}
AddUser(user : User) {
		console.log(this.users);
		this.users.push(user);
		this.emitUsers();
}
}
