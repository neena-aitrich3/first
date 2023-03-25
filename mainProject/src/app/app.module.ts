import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FilterPipe } from './image/shared/filter.pipe';
import { ImageComponent } from './image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { CoracleRideComponent } from './fecilities/components/coracle-ride/coracle-ride.component';
import { CycleRideComponent } from './fecilities/components/cycle-ride/cycle-ride.component';
import { ButterflySafariComponent } from './fecilities/components/butterfly-safari/butterfly-safari.component';
import { BirdWatchingComponent } from './fecilities/components/bird-watching/bird-watching.component';
import { TrekkingComponent } from './fecilities/components/trekking/trekking.component';
import { NightStayComponent } from './fecilities/components/night-stay/night-stay.component';


@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,    
    MainFooterComponent,
    MainHomeComponent,
    AboutUsComponent,   
    FilterPipe,
    ImageComponent,
    GalleryComponent,
    FacilitiesComponent,
    CoracleRideComponent,
    CycleRideComponent,
    ButterflySafariComponent,
    BirdWatchingComponent,
    TrekkingComponent,
    NightStayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
