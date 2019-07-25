import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBalanceComponent } from './project-balance.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepper } from '@angular/cdk/stepper';

describe('ProjectBalanceComponent', () => {
  let component: ProjectBalanceComponent;
  let fixture: ComponentFixture<ProjectBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [StorageService, { provide: CdkStepper, useExisting: null }],
      declarations: [ ProjectBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
