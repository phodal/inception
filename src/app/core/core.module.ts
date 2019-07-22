import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@NgModule({
  providers: [
    AuthService,
    StorageService
  ]
})
export class CoreModule {
}
