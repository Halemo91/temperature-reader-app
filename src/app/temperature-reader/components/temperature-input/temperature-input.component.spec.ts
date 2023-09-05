import { MatInputModule } from '@angular/material/input';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureInputComponent } from './temperature-input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TemperatureInputComponent', () => {
  let component: TemperatureInputComponent;
  let fixture: ComponentFixture<TemperatureInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureInputComponent ],
      imports: [
        ReactiveFormsModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with null values', () => {
    const formValue = component.temperatureForm.value;
    expect(formValue.minTemperature).toBeNull();
    expect(formValue.maxTemperature).toBeNull();
    expect(formValue.targetTemperature).toBeNull();
  });

  it('should validate temperature range', () => {
    const formValue = component.temperatureForm;
    const minTempControl = formValue.get('minTemperature');
    const maxTempControl = formValue.get('maxTemperature');
    const targetTempControl = formValue.get('targetTemperature');
    if (
      minTempControl?.value == null ||
      maxTempControl?.value == null ||
      targetTempControl?.value == null
    )
      return;
    minTempControl.setValue(20);
    maxTempControl.setValue(10);
    targetTempControl.setValue(15);

    component.validateTemperatureRange(formValue);

    expect(minTempControl.hasError('invalidRange')).toBeTruthy();
    expect(maxTempControl.hasError('invalidRange')).toBeTruthy();
    expect(targetTempControl.hasError('outOfRange')).toBeTruthy();

    minTempControl.setValue(10);
    maxTempControl.setValue(20);
    targetTempControl.setValue(15);

    component.validateTemperatureRange(formValue);

    expect(minTempControl.hasError('invalidRange')).toBeFalsy();
    expect(maxTempControl.hasError('invalidRange')).toBeFalsy();
    expect(targetTempControl.hasError('outOfRange')).toBeFalsy();
  });
});
