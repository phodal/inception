import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPurposeComponent } from './project-purpose.component';

describe('ProjectPurposeComponent', () => {
  let component: ProjectPurposeComponent;
  let fixture: ComponentFixture<ProjectPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
