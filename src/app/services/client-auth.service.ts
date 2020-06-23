import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthService {

  user = {
    id: 1,
    username: 'amine@gmail.com',
    name: 'Amine',
    password: '12345'
  }

  authState : boolean = false;

  constructor() { }

  userAuth(username: string, password: string) {
    return new Promise((resolve, reject) => {
      if (username === this.user.username && password === this.user.password) {
        this.authState = true;
        return resolve('Authenticated successfully.')
      } else {
        this.authState = false;
        return reject('Please enter a valid credentials.')
      }
    })
  }

  isLogged() {
    return this.authState;
  }
}
