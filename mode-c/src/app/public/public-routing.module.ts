import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './components/admin-login/admin-login.component';


const routes: Routes = [

 { path:'',component:AdminLoginComponent}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
