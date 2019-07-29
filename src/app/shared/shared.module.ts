import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './custom-material.module';
import { NgxTreeDndModule } from './third-party/ngx-tree-dnd/ngx-tree-dnd.module';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { CalendarCommonModule } from 'angular-calendar';
import { ContentEditableDirective } from './directives/content-editable.directive';
import { DraggableEditableSectionComponent } from './components/draggable-editable-section/draggable-editable-section.component';
import { CoordinatesMapComponent } from './components/coordinates-map/coordinates-map.component';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';
import { GridEditorComponent } from './components/grid-editor/grid-editor.component';
import { CoordinatesBackgroundComponent } from './components/coordinates-background/coordinates-background.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { MarkdownEditorComponent } from './markdown/markdown-editor/markdown-editor.component';
import { MarkdownRenderModule } from './markdown/markdown-render/markdown-render.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { MarkdownTaskItemComponent } from './markdown/markdown-task-item/markdown-task-item.component';
import { MarkdownTaskRenderComponent } from './markdown/markdown-task-render/markdown-task-render.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    NgxTreeDndModule,
    CalendarCommonModule,
    EcoFabSpeedDialModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true
        },
      },
    })
  ],
  declarations: [
    CalendarHeaderComponent,
    DraggableEditableSectionComponent,
    ContentEditableDirective,
    CoordinatesMapComponent,
    GridEditorComponent,
    CoordinatesBackgroundComponent,

    MarkdownEditorComponent,
    MarkdownTaskItemComponent,
    RichTextEditorComponent,
    MarkdownTaskRenderComponent
  ],
  providers: [
    ContentEditableDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    NgxTreeDndModule,
    FlexLayoutModule,

    CalendarHeaderComponent,
    DraggableEditableSectionComponent,
    CoordinatesMapComponent,
    GridEditorComponent,
    CoordinatesBackgroundComponent,

    MarkdownEditorComponent,
    MarkdownTaskItemComponent,
    MarkdownTaskRenderComponent,
    RichTextEditorComponent
  ],
  entryComponents: []
})
export class SharedModule {
}
