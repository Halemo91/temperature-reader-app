import { TemperatureReader } from './components/temperature-reader-component/temperature-reader.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TemperatureReaderPage } from './pages/temperature-reader/temperature-reader.page';


@NgModule({
  declarations: [
    TemperatureReader,
    TemperatureReaderPage
  ],
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class TemperatureReaderModule { }
