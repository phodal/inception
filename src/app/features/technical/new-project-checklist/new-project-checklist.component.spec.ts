import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectChecklistComponent } from './new-project-checklist.component';

describe('NewProjectChecklistComponent', () => {
  let component: NewProjectChecklistComponent;
  let fixture: ComponentFixture<NewProjectChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectChecklistComponent ]
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
