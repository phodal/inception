import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inception';

  constructor(private router: Router, private storageService: StorageService) {
    const lastPage = this.storageService.getItem('last.page');
    this.router.navigateByUrl(lastPage).then((result) => {
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.storageService.setItem('last.page', event.url);
      }
    });
  }
}
