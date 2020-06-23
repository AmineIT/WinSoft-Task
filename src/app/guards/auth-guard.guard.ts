import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClientAuthService } from '../services/client-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: ClientAuthService, private route: Router) {}

  canActivate() {
    if (this.authService.authState !== true) {
      this.route.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
