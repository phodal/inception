import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorPitchComponent } from './elevator-pitch.component';


describe('ElevatorPitchComponent', () => {
  let component: ElevatorPitchComponent;
  let fixture: ComponentFixture<ElevatorPitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevatorPitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatorPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
