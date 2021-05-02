import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { FormserviceService } from './service/formservice.service';
import { FormDeatailService } from './service/form-deatail.service';
import { AddDetailsComponent } from './add-details/add-details.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FormserviceService,FormDeatailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
