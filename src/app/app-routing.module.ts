import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './customer/home/home.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  //Admin
  {path:'admin', component:AdminNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
