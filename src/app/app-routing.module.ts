import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {
    path: 'home',
    loadChildren: () => import('./presentation/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'technical',
    loadChildren: () => import('./presentation/technical/technical.module').then(m => m.TechnicalModule)
  },
  {
    path: 'positioning',
    loadChildren: () => import('./presentation/positioning/positioning.module').then(m => m.PositioningModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./presentation/vision/vision.module').then(m => m.VisionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
