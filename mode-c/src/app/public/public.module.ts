import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginService } from './services/admin-login.service';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PublicComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,

    ReactiveFormsModule
  ],
  providers: [AdminLoginService]

})
export class PublicModule { }
