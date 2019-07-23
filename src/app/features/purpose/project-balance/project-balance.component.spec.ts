import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBalanceComponent } from './project-balance.component';

describe('ProjectBalanceComponent', () => {
  let component: ProjectBalanceComponent;
  let fixture: ComponentFixture<ProjectBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
