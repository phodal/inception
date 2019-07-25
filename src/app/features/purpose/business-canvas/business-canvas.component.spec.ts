import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCanvasComponent } from './business-canvas.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';
import { MatStepperModule } from '@angular/material';

describe('BusinessCanvasComponent', () => {
  let component: BusinessCanvasComponent;
  let fixture: ComponentFixture<BusinessCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, MatStepperModule],
      providers: [StorageService],
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
