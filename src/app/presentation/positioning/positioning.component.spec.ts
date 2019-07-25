import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PositioningComponent } from './positioning.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { StorageService } from '../../core/services/storage.service';

describe('PositioningComponent', () => {
  let component: PositioningComponent;
  let fixture: ComponentFixture<PositioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule, BrowserAnimationsModule],
      providers: [StorageService],
      declarations: [ PositioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
