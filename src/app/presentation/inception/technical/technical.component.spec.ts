import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TechnicalComponent } from './technical.component';
import { SharedModule } from '../../../shared/shared.module';
import { FeaturesModule } from '../../../features/features.module';
import { StorageService } from '../../../core/services/storage.service';

describe('TechnicalComponent', () => {
  let component: TechnicalComponent;
  let fixture: ComponentFixture<TechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule, BrowserAnimationsModule],
      providers: [StorageService],
      declarations: [ TechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
