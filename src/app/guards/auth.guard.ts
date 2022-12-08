import { UserAuthService } from './../Services/user-auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserAuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isUserLogged) {
      // this.router.navigate(['/Product']);

      return true;
    } else {
      alert("YOU MUST LOG IN FIRST");
      this.router.navigate(['/Login']);
      return false;
    }


  }

}
