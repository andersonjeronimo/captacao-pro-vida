/* import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {

  constructor() { }

} */
import { Injectable } from '@angular/core';

declare var firebase: any;

// database secret  plPt0FBrnwreOhgAyCxvAP1WPdjsneqmyWGQ5o0P

@Injectable()
export class FirebaseService {
  private setting = {
    apiKey: 'AIzaSyA6q9Kzg1XwRWWZ5qbvjJY5bwjWYPq3vL8',
    authDomain: 'captacao-pro-vida.firebaseapp.com',
    databaseURL: 'https://captacao-pro-vida.firebaseio.com',
    projectId: 'captacao-pro-vida',
    storageBucket: 'captacao-pro-vida.appspot.com',
    messagingSenderId: '912958024056'
  };
  private provider: any = {};
  constructor() {
    firebase.initializeApp(this.setting);
  }
  // database
  getDatabaseRef(reference: string) {
    return firebase.database().ref(reference);
  }

  getDatabaseChildRef(reference: string) {
    return firebase
      .database()
      .ref()
      .child(reference);
  }

  // storage
  getStorageRef(reference: string) {
    return firebase.storage().ref(reference);
  }

  // authentication
  // estas funções são responsáveis por utilizar os métodos de auth do firebase e de setarem
  // ... o usuário no LocalStorage / SessionStorage

  private saveCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  private removeCurrentUser() {
    localStorage.removeItem('currentUser');
  }

  signOut() {
    firebase.auth().signOut();
    // remover usuário do local storage
    this.removeCurrentUser();
  }

  // somente ADMIN!
  createUserWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        // local storage (...)
        const user = data; // .json();
        if (user && user.refreshToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.saveCurrentUser(user);
        }
      });
    /* .catch(error => {
        alert(`${error.code} : ${error.message}`);
        // utilizar diretiva de alertas
      }); */
  }
}
