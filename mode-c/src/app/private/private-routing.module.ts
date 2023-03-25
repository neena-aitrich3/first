import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { CompanyPendingComponent } from './components/company-pending/company-pending.component';
import { CompanyActivelistComponent } from './components/company-activelist/company-activelist.component';

const routes: Routes = [
  { path:'',component:DashboardComponent},
  {path:'users-list',component:UsersListComponent},
  {path:'active-users',component:ActiveUsersComponent},
  {path:'company-pendinglist',component:CompanyPendingComponent},
  {path:'company-activelist',component:CompanyActivelistComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
