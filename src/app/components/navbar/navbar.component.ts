import { Component, OnInit } from '@angular/core';

import { ClientAuthService } from '../../services/client-auth.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged = false;

  constructor(private authService: ClientAuthService) {
    const authCheck = setInterval(() => {
      if (this.authService.authState === true) clearInterval(authCheck)

      if (this.authService.authState === true) {
        this.isLogged = true
      }
    }, 3000)
  }

  ngOnInit() {
    
  }

}
