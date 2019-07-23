import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () => import('./presentation/home/home.module').then(m => m.HomeModule),
    data: { animation: 'HomePage' }
  },
  {
    path: 'technical',
    loadChildren: () => import('./presentation/technical/technical.module').then(m => m.TechnicalModule),
    data: { animation: 'TechnicalPage' }
  },
  {
    path: 'positioning',
    loadChildren: () => import('./presentation/positioning/positioning.module').then(m => m.PositioningModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./presentation/vision/vision.module').then(m => m.VisionModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./features/purpose/add-wizard/add-wizard.module').then(m => m.AddWizardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
