import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InceptionComponent } from './inception.component';

describe('InceptionComponent', () => {
  let component: InceptionComponent;
  let fixture: ComponentFixture<InceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
