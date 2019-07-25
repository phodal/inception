import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterviewComponent } from './user-interview.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepper } from '@angular/cdk/stepper';

describe('UserInterviewComponent', () => {
  let component: UserInterviewComponent;
  let fixture: ComponentFixture<UserInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [StorageService, { provide: CdkStepper, useExisting: null }],
      declarations: [ UserInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
