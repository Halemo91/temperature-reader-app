/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemperatureReaderPage } from './temperature-reader.page';

describe('TemperatureReaderPage', () => {
  let component: TemperatureReaderPage;
  let fixture: ComponentFixture<TemperatureReaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureReaderPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
