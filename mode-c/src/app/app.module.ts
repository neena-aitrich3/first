import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { PrivateModule } from './private/private.module';
//import { InfluenceChartComponent } from './influence-chart/influence-chart.component';
//import { LeadChartComponent } from './private/components/lead-chart/lead-chart.component';

// import {NgxPaginationModule} from 'ngx-pagination';
// import { initializeKeycloak } from './core/utils/app.init';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'mode-c',
        url: 'http://192.168.1.87:8080',
        clientId: 'mod-c-admin'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
};

@NgModule({
  declarations: [
    AppComponent,
    //InfluenceChartComponent,
   // LeadChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    KeycloakAngularModule,
    PrivateModule
   

  
  ],
  providers: [
   
   { provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
