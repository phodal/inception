import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () => import('./presentation/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'inception',
    loadChildren: () => import('./presentation/inception/inception.module').then(m => m.InceptionModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule)
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
