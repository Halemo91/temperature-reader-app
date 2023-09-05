import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { TemperatureInput } from '../../models/temperature-input';
import { TemperatureForm } from '../../models/temperature-form';

@Component({
  selector: 'app-temperature-input',
  templateUrl: './temperature-input.component.html',
  styleUrls: ['./temperature-input.component.css'],
})
export class TemperatureInputComponent {
  @Output() temperatureValues = new EventEmitter<TemperatureInput>();

  temperatureForm: FormGroup<TemperatureForm>;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.temperatureForm = this.createTemperatureForm();
  }

  errorMessages(inputControl?: AbstractControl): string {
    if (inputControl?.hasError('required') && this.formSubmitted) {
      return 'This field is required';
    }
    if (inputControl?.hasError('invalidRange')) {
      return 'Invalid range';
    }

    if (inputControl?.hasError('outOfRange')) {
      return 'Target Temperature is out of range';
    }
    return '';
  }

  shouldEnableSubmitButton(): boolean {
    return (
      this.temperatureForm &&
      (this.temperatureForm.dirty || this.temperatureForm.valid)
    );
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.temperatureForm?.valid) {
      const { minTemperature, maxTemperature, targetTemperature } =
        this.temperatureForm.getRawValue();
      this.temperatureValues.emit({
        minTemperature,
        maxTemperature,
        targetTemperature,
      });
    }
  }

  private createTemperatureForm(): FormGroup {
    return this.formBuilder.group(
      {
        minTemperature: [null, Validators.required],
        maxTemperature: [null, Validators.required],
        targetTemperature: [null, Validators.required],
      },
      {
        validators: this.validateTemperatureRange.bind(this),
      }
    );
  }

  private validateTemperatureRange(formGroup: FormGroup | null) {
    if (!formGroup) return;

    const minTempControl = formGroup.get('minTemperature');
    const maxTempControl = formGroup.get('maxTemperature');
    const targetTempControl = formGroup.get('targetTemperature');

    if (
      minTempControl?.value == null ||
      maxTempControl?.value == null ||
      targetTempControl?.value == null
    )
      return;

    const minTemp = minTempControl.value;
    const maxTemp = maxTempControl.value;
    const targetTemp = targetTempControl.value;

    if (minTemp > maxTemp) {
      minTempControl.setErrors({ invalidRange: true });
      maxTempControl.setErrors({ invalidRange: true });
    } else {
      minTempControl.setErrors(null);
      maxTempControl.setErrors(null);
    }
    if (targetTemp < minTemp || targetTemp > maxTemp) {
      targetTempControl.setErrors({ outOfRange: true });
    } else {
      targetTempControl.setErrors(null);
    }
  }
}
