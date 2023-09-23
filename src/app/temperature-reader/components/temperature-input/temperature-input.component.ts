import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { TemperatureInput } from '../../models/temperature-input';
import { TemperatureForm } from '../../models/temperature-form';
import { TemperatureValidators } from '../../models/temperature-validators';

@Component({
  selector: 'app-temperature-input',
  templateUrl: './temperature-input.component.html',
  styleUrls: ['./temperature-input.component.css'],
})
export class TemperatureInputComponent {
  @Output() temperatureValues = new EventEmitter<TemperatureInput>();
  @Output() temperatureFormInvalid = new EventEmitter<boolean>();

  temperatureForm: FormGroup<TemperatureForm>;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.temperatureForm = this.createTemperatureForm();
  }

  errorMessages(inputControl?: AbstractControl): string {
    if (inputControl?.hasError('required') && this.formSubmitted) {
      this.temperatureFormInvalid.emit(true);
      return 'This field is required';
    }
    if (inputControl?.hasError('minTemperatureGreaterThanMax')) {
      this.temperatureFormInvalid.emit(true);
      return 'Invalid range';
    }

    if (inputControl?.hasError('targetTemperatureOutOfRange')) {
      this.temperatureFormInvalid.emit(true);
      return 'Target Temperature is out of range';
    }
    return '';
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.temperatureForm?.valid) {
      const { minTemperature, maxTemperature, targetTemperature } =
        this.temperatureForm.getRawValue();
      this.temperatureFormInvalid.emit(false);
      this.temperatureValues.emit({
        minTemperature,
        maxTemperature,
        targetTemperature,
      });
    }
  }

  private createTemperatureForm(): FormGroup {
    const maxTemperatureControl = this.formBuilder.control(null, [
      Validators.required,
    ]);
    const minTemperatureControl = this.formBuilder.control(null, [
      Validators.required,
      TemperatureValidators.minTemperatureLessThanMaxValidator(
        maxTemperatureControl
      ),
    ]);
    const targetTemperatureControl = this.formBuilder.control(null, [
      Validators.required,
      TemperatureValidators.targetTemperatureValidator(
        minTemperatureControl,
        maxTemperatureControl
      ),
    ]);

    return this.formBuilder.group({
      minTemperature: minTemperatureControl,
      maxTemperature: maxTemperatureControl,
      targetTemperature: targetTemperatureControl,
    });
  }
}
