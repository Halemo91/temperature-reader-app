import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'; 

import { TemperatureInputComponent } from './components/temperature-input/temperature-input.component';
import { TemperatureReaderComponent } from './components/temperature-reader/temperature-reader.component';
import { TemperatureReaderPage } from './pages/temperature-reader/temperature-reader.page';


@NgModule({
  declarations: [
    TemperatureReaderComponent,
    TemperatureInputComponent,
    TemperatureReaderPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class TemperatureReaderModule { }
