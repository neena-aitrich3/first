import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { KeycloakService } from 'keycloak-angular';
import {AuthService} from '../../../core/auth/auth.service'
import { AdminDetailsService } from '../../services/admin-details.service';
// import {AppComponent} from '../../../app.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username: any = 'user';


  constructor(private route:Router,private authService: AuthService,private adminDetaiService:AdminDetailsService){}

 async ngOnInit() {
  this.username = await localStorage.getItem('logged_name');

 }


 getDetails() {
  this.adminDetaiService.getAdminDetails(this.username).subscribe((data:any) => {
    console.log(data.id);
  });
 }

//  logout()
//  {
//   // alert("logout");
//   this.route.navigate([""]).then(()=> {
//     window.location.reload();
//     sessionStorage.clear();
//  })

// }

// ngOninit() {
//   // this.username = this.appCom.getUserName()
// }

logout() {
  // this.authService.logout();
  
  this.authService.logout();
}
}
