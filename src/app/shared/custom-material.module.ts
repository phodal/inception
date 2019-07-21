import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class CustomMaterialModule {
}
