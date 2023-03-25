import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';


@NgModule({
  declarations: [
    HomepageComponent,
    GallerypageComponent,
    FacilitiesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
