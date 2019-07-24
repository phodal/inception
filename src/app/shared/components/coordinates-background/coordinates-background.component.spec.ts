import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesBackgroundComponent } from './coordinates-background.component';

describe('CoordinatesBackgroundComponent', () => {
  let component: CoordinatesBackgroundComponent;
  let fixture: ComponentFixture<CoordinatesBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatesBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
