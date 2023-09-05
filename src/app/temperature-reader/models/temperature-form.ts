import { FormControl } from "@angular/forms";

export interface TemperatureForm {
  minTemperature: FormControl<number>;
  maxTemperature: FormControl<number>;
  targetTemperature: FormControl<number>;
}