import { TemperatureInputComponent } from './components/temperature-input/temperature-input.component';
import { TemperatureReaderComponent } from './components/temperature-reader-component/temperature-reader.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
    ReactiveFormsModule
  ]
})
export class TemperatureReaderModule { }
