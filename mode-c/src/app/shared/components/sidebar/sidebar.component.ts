import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

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
