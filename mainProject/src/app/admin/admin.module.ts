import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { ApproveListComponent } from './components/approve-list/approve-list.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    AdminComponent,
    RequestListComponent,
    ApproveListComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
