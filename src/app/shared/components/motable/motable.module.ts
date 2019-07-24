import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DragulaModule } from 'ng2-dragula';

import { MotableComponent } from './motable.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    DragulaModule.forRoot()
  ],
  exports: [MotableComponent],
  declarations: [MotableComponent]
})

export class MotableModule {

}
