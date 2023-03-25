import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { TrekkingComponent } from './fecilities/components/trekking/trekking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomepageComponent } from './shared-module/homepage/homepage.component';

const routes: Routes = [
 // {path:'',loadChildren:()=>import('./shared-module/shared-module.module').then(m=>m.SharedModuleModule),}
{path:'',component:MainHomeComponent,  data:{Animation:'isRight'}},
{path:'home',component:MainHomeComponent,data:{Animation:'isRight'}  },
{path:'aboutus',component:AboutUsComponent,  data:{Animation:'isRight'}},
 {path:'gallery',component:GalleryComponent,  data:{Animation:'isRight'}},
{path:'facilities',component:FacilitiesComponent,  data:{Animation:'isRight'}},  //{path:'aboutus',component:MainFooterComponent}
{path:'trekking',component:TrekkingComponent,  data:{Animation:'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
