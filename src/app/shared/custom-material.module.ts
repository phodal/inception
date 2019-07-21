import {
  MatButtonModule,
  MatCheckboxModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSliderModule,
  MatStepperModule
} from '@angular/material';
import { NgModule } from '@angular/core';

const MATERIAL_IMPORTS_EXPORTS = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatSliderModule,
  MatDividerModule
];

@NgModule({
  imports: MATERIAL_IMPORTS_EXPORTS,
  exports: MATERIAL_IMPORTS_EXPORTS
})
export class CustomMaterialModule {
}
