import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorPitchComponent } from './elevator-pitch.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepper } from '@angular/cdk/stepper';


describe('ElevatorPitchComponent', () => {
  let component: ElevatorPitchComponent;
  let fixture: ComponentFixture<ElevatorPitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [StorageService, { provide: CdkStepper, useExisting: null }],
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
