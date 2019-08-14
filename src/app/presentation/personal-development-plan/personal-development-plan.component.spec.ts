import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDevelopmentPlanComponent } from './personal-development-plan.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PersonalDevelopmentPlanComponent', () => {
  let component: PersonalDevelopmentPlanComponent;
  let fixture: ComponentFixture<PersonalDevelopmentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule, BrowserAnimationsModule],
      declarations: [PersonalDevelopmentPlanComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDevelopmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
