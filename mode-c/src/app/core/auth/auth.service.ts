import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private keycloakService: KeycloakService, private router: Router) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloakService.loadUserProfile();
    }
  }

  public getUserName()  {
    return this.userProfile?.username;
  }


  public logout(): void {

    //  const logoutOptions = { redirectUri :"http://192.168.1.8:8080/"};
    this.keycloakService.logout().then((success) => {
      console.log("--> log: logout success ", success );
      localStorage.clear();
}).catch((error) => {
      console.log("--> log: logout error ", error );
});
    // this.router.navigate([' http://192.168.1.8:8080/']);


    // this.keycloakService.logout('http://192.168.1.10:8080/').then((success) => {
    //   console.log("--> log: logout success ", success );
    //   this.keycloakService.clearToken();
    // });
  }
}
