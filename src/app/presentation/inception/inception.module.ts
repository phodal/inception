import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { InceptionRoutingModule } from './inception-routing.module';
import { InceptionComponent } from './inception.component';
import { FeaturesModule } from '../../features/features.module';
import { InceptionNavBarComponent } from './inception-nav-bar/inception-nav-bar.component';

@NgModule({
  declarations: [
    InceptionComponent,
    InceptionNavBarComponent
  ],
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
