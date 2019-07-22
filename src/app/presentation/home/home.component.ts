import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarEventAction, CalendarEvent, CalendarView, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import {
  startOfDay,
  addHours, endOfDay
} from 'date-fns';
import { isEmpty } from 'lodash';

import { StorageService } from '../../core/services/storage.service';

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  view: CalendarView = CalendarView.Day;
  CalendarView = CalendarView;
  refresh: Subject<any> = new Subject();
  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [{
    start: addHours(startOfDay(new Date()), 8),
    end: addHours(startOfDay(new Date()), 10),
    title: 'A draggable and resizable event',
    color: colors.yellow,
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }];

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    const calendarEvents = this.storageService.getItem('inception.calendar');
    if (!isEmpty(calendarEvents)) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < calendarEvents.length; i++) {
        calendarEvents[i].start = new Date(calendarEvents[i].start);
        calendarEvents[i].end = new Date(calendarEvents[i].end);
      }
      this.events = calendarEvents;
      this.refresh.next();
    }
  }

  ngOnDestroy() {
    this.storageEvents();
  }

  private storageEvents() {
    this.storageService.setItem('inception.calendar', this.events);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.storageEvents();
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent) {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
    this.storageEvents();
  }

  addEvent(event?: any, item?: any): void {
    if (event) {
      this.events.push({
        start: event,
        title: 'New event',
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      });
      this.refresh.next();

      this.storageEvents();
      return;
    }
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];

    this.storageEvents();
    this.refresh.next();
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
    this.storageEvents();
  }
}
