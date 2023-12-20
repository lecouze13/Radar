
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ContactTabComponent } from './contact-tab/contact-tab.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ContactTabComponent,
    HeaderComponent,
    AdminComponent,
    MapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }