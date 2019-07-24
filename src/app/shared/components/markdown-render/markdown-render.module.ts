import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownRenderComponent } from './markdown-render.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true
        },
      },
    }),
  ],
  declarations: [
    MarkdownRenderComponent
  ],
  exports: [
    MarkdownRenderComponent
  ]
})
export class MarkdownRenderModule { }
