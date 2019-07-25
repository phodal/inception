import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationMapComponent } from './organization-map.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';

describe('OrganizationMapComponent', () => {
  let component: OrganizationMapComponent;
  let fixture: ComponentFixture<OrganizationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [StorageService],
      declarations: [ OrganizationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
