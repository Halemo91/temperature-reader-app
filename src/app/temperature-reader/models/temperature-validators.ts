import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class TemperatureValidators {

  static minTemperatureLessThanMaxValidator(maxControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const minTemp = control.value;
      const maxTemp = maxControl.value;
  
      if (minTemp != null && maxTemp != null && minTemp >= maxTemp) {
        return { minTemperatureGreaterThanMax: true };
      }
  
      return null;
    };
  }
  static targetTemperatureValidator(minControl: AbstractControl, maxControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const targetTemp = control.value;
      const minTemp = minControl.value;
      const maxTemp = maxControl.value;

      if (targetTemp != null) {
        if (targetTemp < minTemp || targetTemp > maxTemp) {
          return { targetTemperatureOutOfRange: true };
        }
      }
      return null;
    };
  }
}
