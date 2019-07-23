import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMapComponent } from './business-map.component';

describe('BusinessMapComponent', () => {
  let component: BusinessMapComponent;
  let fixture: ComponentFixture<BusinessMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
