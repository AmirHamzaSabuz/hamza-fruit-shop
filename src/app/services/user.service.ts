import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private fs: AngularFirestore) {}

	addNewUser(id, name, address) {
		return this.fs.doc('users/' + id).set({
			name,
			address
		});
	}
}
