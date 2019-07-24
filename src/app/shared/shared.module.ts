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
import { MotableModule } from './components/motable/motable.module';
import { DragulaModule } from 'ng2-dragula';

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
    MotableModule
  ],
  declarations: [
    CalendarHeaderComponent,
    DraggableEditableSectionComponent,
    ContentEditableDirective,
    CoordinatesMapComponent
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
    MotableModule,

    CalendarHeaderComponent,
    DraggableEditableSectionComponent,
    CoordinatesMapComponent
  ],
  entryComponents: []
})
export class SharedModule {
}
