import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWizardComponent } from './add-wizard.component';

describe('AddWizardComponent', () => {
  let component: AddWizardComponent;
  let fixture: ComponentFixture<AddWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
