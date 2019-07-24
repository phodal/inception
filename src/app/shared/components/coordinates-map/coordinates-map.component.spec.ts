import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesMapComponent } from './coordinates-map.component';

describe('CoordinatesMapComponent', () => {
  let component: CoordinatesMapComponent;
  let fixture: ComponentFixture<CoordinatesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
