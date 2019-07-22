import { Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { get } from 'lodash';

import { StorageService } from './core/services/storage.service';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> TechnicalPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('HomePage <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'Inception';

  constructor(private router: Router, private storageService: StorageService) {
    const lastPage = this.storageService.getItem('last.page');
    if (lastPage) {
      this.router.navigateByUrl(lastPage).then((result) => {
      });
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.storageService.setItem('last.page', event.url);
      }
    });
  }

  getRouteAnimation(outlet) {
    return outlet && outlet.activatedRouteData && get(outlet.activatedRouteData, 'animation');
  }
}
