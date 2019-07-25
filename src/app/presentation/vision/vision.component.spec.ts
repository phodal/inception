import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VisionComponent } from './vision.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { StorageService } from '../../core/services/storage.service';

describe('VisionComponent', () => {
  let component: VisionComponent;
  let fixture: ComponentFixture<VisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule, BrowserAnimationsModule],
      providers: [StorageService],
      declarations: [ VisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
