import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';

import { MarkdownRenderComponent } from './markdown-render.component';
import { SharedModule } from '../../shared.module';
import { FeaturesModule } from '../../../features/features.module';

describe('MarkdownRenderComponent', () => {
  let component: MarkdownRenderComponent;
  let fixture: ComponentFixture<MarkdownRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, FeaturesModule, MarkdownModule],
      providers: [MarkdownService,
        {
          provide: MarkedOptions,
          useValue: {
            gfm: true,
            tables: true
          }
        }
      ],
      declarations: [MarkdownRenderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
