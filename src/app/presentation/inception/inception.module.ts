import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { InceptionRoutingModule } from './inception-routing.module';
import { InceptionComponent } from './inception.component';
import { FeaturesModule } from '../../features/features.module';

@NgModule({
  declarations: [InceptionComponent],
  imports: [
    CoreModule,
    SharedModule,
    FeaturesModule,
    InceptionRoutingModule
  ],
  bootstrap: [InceptionComponent]
})
export class InceptionModule {
}
