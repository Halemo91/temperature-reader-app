import { MatInputModule } from '@angular/material/input';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperatureReaderComponent } from './temperature-reader.component';

describe('TemperatureReaderComponent', () => {
  let component: TemperatureReaderComponent;
  let fixture: ComponentFixture<TemperatureReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureReaderComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
