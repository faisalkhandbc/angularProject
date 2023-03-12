import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { MainNavComponent } from './admin/main-nav/main-nav.component';
import { SideNavComponent } from './admin/side-nav/side-nav.component';
import { HeaderComponent } from './customer/header/header.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { HomeComponent } from './customer/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminNavComponent,
    MainNavComponent,
    SideNavComponent,
    HeaderComponent,
    AdminAuthComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
