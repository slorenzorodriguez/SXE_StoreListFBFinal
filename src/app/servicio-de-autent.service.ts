import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {
  // email = '';
  // pass = '';
  // el usuario ya autenticado
  authUser = null;

  constructor(public miauth: AngularFireAuth) {
  }
    // observable
    user = this.miauth.authState.pipe(map(authState => {
      console.log('authState', authState);
      if (!authState) {
        return null;
      } else {
        // …
        return authState;
      }
    }));

    login() {
      console.log('Github login!');
      this.miauth.auth.signInWithPopup(new auth.GithubAuthProvider())
        .then(user => {
          console.log('user logado: ', user);
          this.authUser = user.user;
        })
        .catch(error => {
          console.log('error en Github login: ', error);
        });
    }

    glogin() {
      console.log('Google login!');
      this.miauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        .then(user => {
          console.log('user logado: ', user);
          // this.email = '';
          // this.pass = '';
          this.authUser = user.user;
        })
        .catch(error => {
          console.log('error en google login: ', error);
        });
    }

    logout() {
      console.log('logout!');
      this.miauth.auth.signOut();
    }
  }
