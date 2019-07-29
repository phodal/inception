import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { InceptionRoutingModule } from './inception-routing.module';
import { InceptionComponent } from './inception.component';
import { FeaturesModule } from '../../features/features.module';
import { InceptionNavBarComponent } from './inception-nav-bar/inception-nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InceptionComponent,
    InceptionNavBarComponent
  ],
  imports: [
    FeaturesModule,
    SharedModule,
    FormsModule,
    CommonModule,
    InceptionRoutingModule
  ],
  bootstrap: [InceptionComponent]
})
export class InceptionModule {
}
