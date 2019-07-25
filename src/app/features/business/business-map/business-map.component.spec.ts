import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMapComponent } from './business-map.component';
import { SharedModule } from '../../../shared/shared.module';
import { FeaturesModule } from '../../features.module';
import { StorageService } from '../../../core/services/storage.service';

describe('BusinessMapComponent', () => {
  let component: BusinessMapComponent;
  let fixture: ComponentFixture<BusinessMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [StorageService],
      declarations: [ BusinessMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
