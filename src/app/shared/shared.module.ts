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
import { MarkdownTasksEditorComponent } from './markdown/markdown-task-editor/markdown-tasks-editor.component';
import { MarkdownRenderModule } from './markdown/markdown-render/markdown-render.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { MarkdownTaskItemComponent } from './markdown/markdown-task-item/markdown-task-item.component';
import { MarkdownTaskRenderComponent } from './markdown/markdown-task-render/markdown-task-render.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MarkdownTaskItemService } from './markdown/markdown-task-item/markdown-task-item.service';
import { MindMapModule } from './modules/mind-map/mind-map.module';
import { MarkdownTaskItemFormComponent } from './markdown/markdown-task-item-form/markdown-task-item-form.component';
import { AngularSplitModule } from 'angular-split';

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
    FlatpickrModule.forRoot(),
    AngularSplitModule.forRoot(),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true
        },
      },
    }),
    MindMapModule
  ],
  declarations: [
    CalendarHeaderComponent,
    DraggableEditableSectionComponent,
    ContentEditableDirective,
    CoordinatesMapComponent,
    GridEditorComponent,
    CoordinatesBackgroundComponent,

    MarkdownTasksEditorComponent,
    MarkdownTaskItemComponent,
    RichTextEditorComponent,
    MarkdownTaskRenderComponent,
    MarkdownTaskItemFormComponent
  ],
  providers: [
    ContentEditableDirective,
    MarkdownTaskItemService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    NgxTreeDndModule,
    FlexLayoutModule,
    FlatpickrModule,
    MindMapModule,
    AngularSplitModule,

    CalendarHeaderComponent,
    DraggableEditableSectionComponent,
    CoordinatesMapComponent,
    GridEditorComponent,
    CoordinatesBackgroundComponent,

    MarkdownTasksEditorComponent,
    MarkdownTaskItemComponent,
    MarkdownTaskRenderComponent,
    RichTextEditorComponent,
    MarkdownTaskItemFormComponent
  ],
  entryComponents: [
    MarkdownTaskItemFormComponent
  ]
})
export class SharedModule {
}
