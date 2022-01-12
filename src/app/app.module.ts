import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/form-page/form/form.component';
import { LeftFormComponent } from './components/form-page/form/left-form/left-form.component';
import { RightFormComponent } from './components/form-page/form/right-form/right-form.component';
import { AppComponent } from './containers/app/app.component';
import { FormPageComponent } from './containers/form-page/form-page.component';
import { NavbarComponent } from './components/app/navbar/navbar.component';
import { TablePageComponent } from './containers/table-page/table-page.component';
import { SideNavbarComponent } from './components/app/side-navbar/side-navbar.component';
import { SideNavbarItemComponent } from './components/app/side-navbar/side-navbar-item/side-navbar-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table-page/table/table.component';
import { Reuest } from './models/reuest.models';
import { ReuestService } from './servise/reuest.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LeftFormComponent,
    RightFormComponent,
    FormPageComponent,
    NavbarComponent,
    TablePageComponent,
    SideNavbarComponent,
    SideNavbarItemComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    ReuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
