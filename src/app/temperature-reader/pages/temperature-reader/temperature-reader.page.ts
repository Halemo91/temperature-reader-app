import { Component } from '@angular/core';
import { TemperatureInput } from '../../models/temperature-input';

@Component({
  selector: 'app-temperature-reader-page',
  templateUrl: './temperature-reader.page.html',
  styleUrls: ['./temperature-reader.page.css'],
})
export class TemperatureReaderPage{
  minTemperature!: number;
  maxTemperature!: number;
  targetTemperature!: number;

  constructor() {}


  onTemperatureValuesChanges(values?: TemperatureInput) {
    if (values) {
      this.minTemperature = values.minTemperature;
      this.maxTemperature = values.maxTemperature;
      this.targetTemperature = values.targetTemperature;
    }
  }
}
