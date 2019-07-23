import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCanvasComponent } from './business-canvas.component';

describe('BusinessCanvasComponent', () => {
  let component: BusinessCanvasComponent;
  let fixture: ComponentFixture<BusinessCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
