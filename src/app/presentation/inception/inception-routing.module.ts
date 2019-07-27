import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InceptionComponent } from './inception.component';

const routes: Routes = [
  {
    path: '',
    component: InceptionComponent,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then(m => m.ScheduleModule),
        data: { animation: 'HomePage' }
      },
      {
        path: 'technical',
        loadChildren: () => import('../technical/technical.module').then(m => m.TechnicalModule),
        data: { animation: 'TechnicalPage' }
      },
      {
        path: 'positioning',
        loadChildren: () => import('../positioning/positioning.module').then(m => m.PositioningModule)
      },
      {
        path: 'vision',
        loadChildren: () => import('../vision/vision.module').then(m => m.VisionModule)
      },
      {
        path: 'business',
        loadChildren: () => import('../business/business.module').then(m => m.BusinessModule)
      },
      {
        path: 'personas',
        loadChildren: () => import('../personas/personas.module').then(m => m.PersonasModule)
      },
      {
        path: 'planning',
        loadChildren: () => import('../planning/planning.module').then(m => m.PlanningModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InceptionRoutingModule {
}
