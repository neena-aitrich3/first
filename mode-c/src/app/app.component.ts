import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mod-c-admin';

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  public token : string = '';

  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.token = await this.keycloak.getToken();
      localStorage.setItem('token',this.token);
      localStorage.setItem('logged_name',this.userProfile.username!);
    } else {
      this.login();
    }
  }

  // public getUserName()  {
  //   console.log(this.userProfile?.username);
  //   return this.userProfile?.username;
  // }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
