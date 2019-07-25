import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderMapComponent } from './stakeholder-map.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';

describe('StakeholderMapComponent', () => {
  let component: StakeholderMapComponent;
  let fixture: ComponentFixture<StakeholderMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [StorageService],
      declarations: [ StakeholderMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
