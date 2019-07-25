import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchModelComponent } from './branch-model.component';

describe('BranchModelComponent', () => {
  let component: BranchModelComponent;
  let fixture: ComponentFixture<BranchModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
