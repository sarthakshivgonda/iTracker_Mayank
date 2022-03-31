import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { RecruiterComponent } from './recruiter.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ]
})
export class RecruiterModule { }
