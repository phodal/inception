import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindMapComponent } from './mind-map.component';

describe('MindmapComponent', () => {
  let component: MindMapComponent;
  let fixture: ComponentFixture<MindMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
