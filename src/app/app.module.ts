import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { RecruiterComponent } from './features/recruiter/recruiter.component';
import { RecruiterService } from './features/recruiter/recruiter.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http' 


@NgModule({
  declarations: [
    AppComponent,
    RecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RecruiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
