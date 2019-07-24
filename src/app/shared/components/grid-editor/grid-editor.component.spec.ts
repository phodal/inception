import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEditorComponent } from './grid-editor.component';

describe('GridEditorComponent', () => {
  let component: GridEditorComponent;
  let fixture: ComponentFixture<GridEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
