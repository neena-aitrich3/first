import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard implements CanActivate {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  )
   {
    super(router, keycloak);
  }

  // public async isAccessAllowed(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ) : Promise<boolean | UrlTree> {
  //   // Force the user to log in if currently unauthenticated.
  //   if (!this.authenticated) {
  //     await this.keycloak.login({
  //       // redirectUri: window.location.origin + state.url,
  //       redirectUri: 'http://192.168.1.10:8080/',
  //     });
  //   } 

  //   // Get the roles required from the route.
  //   const requiredRoles = route.data['roles'];

  //   // Allow the user to proceed if no additional roles are required to access the route.
  //   if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
  //     this.router.navigate(['/']);
  //     return true;
  //   }

  //   // Allow the user to proceed if all the required roles are present.
  //   return requiredRoles.every((role) => this.roles.includes(role));
  // }

  public async isAccessAllowed(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      console.log('not logined')
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      }).then((success) => {
        console.log('complete',success);
      });
    }

    // Get the roles required from the route.
    console.log('logined '+ this.keycloak.getUsername());
    const requiredRoles = route.data['roles'];

    console.log(requiredRoles);

    console.log(this.roles);
    
    

    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    // return requiredRoles.every((role) => this.roles.includes(role));

      if(requiredRoles.every((role) => this.roles.includes(role))) {
        return requiredRoles.every((role) => this.roles.includes(role));
      } else {
        this.router.navigate(['unauthorized'])
        return false;
      }
      
    

  }
}