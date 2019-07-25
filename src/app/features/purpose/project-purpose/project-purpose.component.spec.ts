import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPurposeComponent } from './project-purpose.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';

describe('ProjectPurposeComponent', () => {
  let component: ProjectPurposeComponent;
  let fixture: ComponentFixture<ProjectPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [StorageService],
      declarations: [ ProjectPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
