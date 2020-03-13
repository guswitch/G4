import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut(){
    return this.angularFireAuth.auth.signOut();
  }

}