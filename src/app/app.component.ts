import { Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

import { StorageService } from './core/services/storage.service';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('leave <=> enter', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ right: '100%' })
      ], { optional: true }),
      query(':enter', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ], { optional: true })
      ]),
      query(':leave', animateChild(), { optional: true })
    ]),
    transition('enter <=> leave', [
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
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild())
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
  private lastState = 'enter';

  constructor(private router: Router, private storageService: StorageService) {
    // const lastPage = this.storageService.getItem('last.page');
    // if (lastPage) {
    //   this.router.navigateByUrl(lastPage).then((result) => {
    //   });
    // }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.lastState === 'enter') {
          this.lastState = 'leave';
        } else {
          this.lastState = 'enter';
        }
        // this.storageService.setItem('last.page', event.url);
      }
    });
  }

  getRouteAnimation() {
    return this.lastState;
  }
}
