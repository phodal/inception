import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchModelComponent } from './branch-model.component';
import { SharedModule } from '../../../shared/shared.module';
import { StorageService } from '../../../core/services/storage.service';

describe('BranchModelComponent', () => {
  let component: BranchModelComponent;
  let fixture: ComponentFixture<BranchModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [StorageService],
      declarations: [ BranchModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
