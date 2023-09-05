import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TemperatureInput } from '../../models/temperature-input';

@Component({
  selector: 'app-temperature-input',
  templateUrl: './temperature-input.component.html',
  styleUrls: ['./temperature-input.component.css']
})
export class TemperatureInputComponent {
  @Output() temperatureValues = new EventEmitter<TemperatureInput>();

  temperatureForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.temperatureForm = this.fb.group({
      minTemperature: ['', [Validators.required]],
      maxTemperature: ['', [Validators.required, Validators.min(1)]],
      targetTemperature: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.temperatureForm.valid) {
      const { minTemperature, maxTemperature, targetTemperature } = this.temperatureForm.value;
      this.temperatureValues.emit({ minTemperature, maxTemperature, targetTemperature });
    }
  }
}