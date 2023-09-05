import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-reader',
  templateUrl: './temperature-reader.component.html',
  styleUrls: ['./temperature-reader.component.css'],
})
export class TemperatureReaderComponent {
  @Input()
  minTemperature?: number;
  @Input()
  maxTemperature?: number;
  @Input()
  targetTemperature?: number;
  @Input()
  hideTemperatureValues = false;

  /**
   * Calculates the CSS rotation value for the target temperature indicator.
   * @returns A string with the CSS transform property for rotation.
   */
  calculateTargetTemperatureRotation(): string {
    if (
      this.minTemperature == null ||
      this.maxTemperature == null ||
      this.targetTemperature == null
    ) {
      return '';
    }
    const temperatureRange = this.maxTemperature - this.minTemperature;
    const middleTemperature = (this.maxTemperature + this.minTemperature) / 2;
    const temperaturePosition =
      (this.targetTemperature - this.minTemperature) / temperatureRange;
    let rotationDegrees = 0;

    if (this.targetTemperature > middleTemperature) {
      // Rotate the target line for values greater than the middle temperature
      rotationDegrees = temperaturePosition * 225;
    } else if (this.targetTemperature < middleTemperature) {
      // Rotate the target line for values less than the middle temperature
      rotationDegrees = temperaturePosition * 225 + 315;
    } else {
      // Handle the case when the target temperature is exactly at the middle temperature
      rotationDegrees = temperaturePosition * 180;
    }

    return `rotate(${rotationDegrees}deg)`;
  }

  areInputsValid(): boolean {
    return (
      this.minTemperature != null &&
      this.maxTemperature != null &&
      this.targetTemperature != null &&
      !this.hideTemperatureValues
    );
  }
}
