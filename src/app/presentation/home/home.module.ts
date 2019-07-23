import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ContextMenuModule } from 'ngx-contextmenu';

import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { FlatpickrModule } from 'angularx-flatpickr';

const HOME_ROUTER_CONFIG: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(HOME_ROUTER_CONFIG),
    FeaturesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true
    }),
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
