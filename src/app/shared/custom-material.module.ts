import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatOptionModule, MatSelectModule, MatSidenavModule,
  MatSliderModule,
  MatStepperModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

const MATERIAL_IMPORTS_EXPORTS = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatSliderModule,
  MatDividerModule,
  DragDropModule,
  MatListModule,
  MatCardModule,
  MatSidenavModule,
  MatOptionModule,
  MatSelectModule
];

@NgModule({
  imports: MATERIAL_IMPORTS_EXPORTS,
  exports: MATERIAL_IMPORTS_EXPORTS
})
export class CustomMaterialModule {
}
