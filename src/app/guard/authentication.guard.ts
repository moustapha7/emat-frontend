import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { LoginComponent } from '../login/login.component';




@Injectable({providedIn : 'root'})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService : AuthService, private router: Router,private token : StorageService,
            private login : LoginComponent){}

  canActivate(): boolean {
    
    // if(this.login.isAuthenticated()){
    //   this.router.navigate(['login']);
    //   return true;
    // } else{
    //   this.router.navigate(['login']);
    //   return false;
    // }

    if(this.token.isLoggedIn()){
      return true;
    
    } else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
};



export const guestGuard: CanActivateFn =  (route, state) => {
  return inject(AuthenticationGuard).canActivate();
};