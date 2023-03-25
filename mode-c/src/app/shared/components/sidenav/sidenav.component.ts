import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../core/auth/auth.service'
import { AdminDetailsService } from '../../services/admin-details.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
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
 logout() {
  // this.authService.logout();
  
  this.authService.logout();
}

head:string="User Management";
name1 : string='Total Users';
name2:string='ActiveUsers';

users = [
{
  main_head :'Dashboard'
},
{
head:'User Management'
},
{
  name1 : 'Active Users'
},
{
  name2 : 'Pending List'
}


]
companies = [

{
head:'Company Management'
},
{
  name1 : 'Active Company List'
},
{
  name2 : 'Pending List'
}


]


}
