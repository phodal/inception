import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectChecklistComponent } from './new-project-checklist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { FeaturesModule } from '../../features.module';

describe('NewProjectChecklistComponent', () => {
  let component: NewProjectChecklistComponent;
  let fixture: ComponentFixture<NewProjectChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        FeaturesModule
      ],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
