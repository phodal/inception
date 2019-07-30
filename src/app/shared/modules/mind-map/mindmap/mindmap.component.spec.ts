import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindmapComponent } from './mindmap.component';

describe('MindmapComponent', () => {
  let component: MindmapComponent;
  let fixture: ComponentFixture<MindmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
