import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientAuthService } from '../../services/client-auth.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }
  error : boolean = false;
  loading: boolean = false;
  message;

  constructor(private authService: ClientAuthService ,private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.authService.userAuth(this.user.username, this.user.password)
        .then(res => {
          this.error = false;
          this.message = res;
          this.authService.authState = true;
          
          // This is just optinally to redirect to this path after showing the success message :) 
          setTimeout(() => {
             this.route.navigateByUrl(`/dashboard`);
          }, 1000)
        })
        .catch(error => {
          this.error = true;
          this.message = error;
        })
    }, 2000)
  }

}
