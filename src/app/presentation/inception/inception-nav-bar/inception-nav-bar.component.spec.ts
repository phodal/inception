import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InceptionNavBarComponent } from './inception-nav-bar.component';

describe('InceptionNavBarComponent', () => {
  let component: InceptionNavBarComponent;
  let fixture: ComponentFixture<InceptionNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InceptionNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InceptionNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
