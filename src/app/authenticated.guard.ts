import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertMessageService } from './alert-message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private user: UserService,
    private alert: AlertMessageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const result = !!this.user.user;
    
    if (!result) {
      this.alert.messages.push('Vous devez vous connecter pour accéder à cette page');
    }

    return result;
  }
  
}
