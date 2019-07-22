import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { AutoFocusDirective } from './directives/ngx-tree-dnd-autofocus.directive';
import { DragElementsDirective } from './directives/ngx-tree-dnd-drag.directive';
import { DropElementsDirective } from './directives/ngx-tree-dnd-drop.directive';
import { NgxTreeParentComponent } from './ngx-tree-dnd-parent/ngx-tree-dnd-parent.component';
import { NgxTreeChildrenComponent } from './ngx-tree-dnd-children/ngx-tree-dnd-children.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AutoFocusDirective,
    DragElementsDirective,
    DropElementsDirective,
    NgxTreeParentComponent,
    NgxTreeChildrenComponent
  ],
  exports: [
    AutoFocusDirective,
    DragElementsDirective,
    DropElementsDirective,
    NgxTreeParentComponent,
    NgxTreeChildrenComponent
  ]
})
export class NgxTreeDndModule {
}
