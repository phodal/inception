import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasComponent } from './personas.component';
import { SharedModule } from '../../../shared/shared.module';
import { FeaturesModule } from '../../../features/features.module';
import { StorageService } from '../../../core/services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PersonasComponent', () => {
  let component: PersonasComponent;
  let fixture: ComponentFixture<PersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule, BrowserAnimationsModule],
      providers: [StorageService],
      declarations: [PersonasComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
