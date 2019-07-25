import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesMapComponent } from './coordinates-map.component';
import { SharedModule } from '../../shared.module';
import { FeaturesModule } from '../../../features/features.module';

describe('CoordinatesMapComponent', () => {
  let component: CoordinatesMapComponent;
  let fixture: ComponentFixture<CoordinatesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule],
      declarations: [ CoordinatesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
