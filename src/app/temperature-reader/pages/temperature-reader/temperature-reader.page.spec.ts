import { MatInputModule } from '@angular/material/input';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemperatureReaderPage } from './temperature-reader.page';
import { TemperatureInput } from '../../models/temperature-input';
import { TemperatureInputComponent } from '../../components/temperature-input/temperature-input.component';
import { TemperatureReaderComponent } from '../../components/temperature-reader/temperature-reader.component';

describe('TemperatureReaderPage', () => {
  let component: TemperatureReaderPage;
  let fixture: ComponentFixture<TemperatureReaderPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TemperatureReaderPage,
        TemperatureInputComponent,
        TemperatureReaderComponent,
      ],
      imports: [FormsModule, ReactiveFormsModule, MatInputModule],
    });

    fixture = TestBed.createComponent(TemperatureReaderPage);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(component.minTemperature).toBeUndefined();
    expect(component.maxTemperature).toBeUndefined();
    expect(component.targetTemperature).toBeUndefined();
    expect(component.hideTemperatureValues).toBeFalse();
  });

  it('should update properties when onTemperatureValuesChanges is called with values', () => {
    const values: TemperatureInput = {
      minTemperature: 0,
      maxTemperature: 100,
      targetTemperature: 50,
    };

    component.onTemperatureValuesChanges(values);

    expect(component.minTemperature).toEqual(values.minTemperature);
    expect(component.maxTemperature).toEqual(values.maxTemperature);
    expect(component.targetTemperature).toEqual(values.targetTemperature);
  });

  it('should update hideTemperatureValues when onTemperatureFormIsInvalid is called', () => {
    component.onTemperatureFormIsInvalid(true);
    expect(component.hideTemperatureValues).toBeTrue();

    component.onTemperatureFormIsInvalid(false);
    expect(component.hideTemperatureValues).toBeFalse();
  });
});
