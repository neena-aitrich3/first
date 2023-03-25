import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { ChartComponent } from './components/chart/chart.component';
import { LeadChartComponent } from './components/lead-chart/lead-chart.component';
import { InfluenceChartComponent } from './components/influence-chart/influence-chart.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
//import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminUserService } from './services/admin-user.service';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { AdminCompanyService } from './services/admin-company.service';
import { CompanyPendingComponent } from './components/company-pending/company-pending.component';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { CompanyActivelistComponent } from './components/company-activelist/company-activelist.component';
import { DashboardCompanyService } from './services/dashboard-company.service';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,
    WidgetsComponent,
    ChartComponent,
    LeadChartComponent,
    InfluenceChartComponent,
    NavbarComponent,
    SidebarComponent,
    SidenavComponent,
    UsersListComponent,
    ActiveUsersComponent,
    CompanyPendingComponent,
    CompanyActivelistComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule,
    NgChartsModule
  ],
  providers:[AdminUserService,AdminCompanyService,DashboardCompanyService]
})
export class PrivateModule { }
