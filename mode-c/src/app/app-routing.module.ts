import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
//  { path:'',loadChildren:()=>import('./public/public.module').then(m=>m.PublicModule)},
 {path:'dashboard',loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule),
 }
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }