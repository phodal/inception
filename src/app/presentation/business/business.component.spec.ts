import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessComponent } from './business.component';
import { StorageService } from '../../core/services/storage.service';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';

describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let fixture: ComponentFixture<BusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule],
      providers: [StorageService],
      declarations: [ BusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
