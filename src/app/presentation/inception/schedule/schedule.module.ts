import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ContextMenuModule } from 'ngx-contextmenu';

import { SharedModule } from '../../../shared/shared.module';
import { FeaturesModule } from '../../../features/features.module';

const routes: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FeaturesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ContextMenuModule.forRoot({
      useBootstrap4: true
    }),
  ],
  declarations: [ScheduleComponent]
})
export class ScheduleModule {
}
