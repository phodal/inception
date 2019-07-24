import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribePersonasComponent } from './describe-personas.component';

describe('DescribePersonasComponent', () => {
  let component: DescribePersonasComponent;
  let fixture: ComponentFixture<DescribePersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescribePersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
