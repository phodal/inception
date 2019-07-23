import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarEventAction, CalendarEvent, CalendarView, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import {
  startOfDay,
  addHours, endOfDay, format, parse
} from 'date-fns';
import { isEmpty } from 'lodash';
import flatpickr from 'flatpickr';

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
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  view: CalendarView = CalendarView.Day;
  CalendarView = CalendarView;
  refresh: Subject<any> = new Subject();
  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
  minHour = 8;
  maxHour = 20;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    const calendarEvents = this.storageService.getItem('inception.calendar');
    if (!isEmpty(calendarEvents)) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < calendarEvents.length; i++) {
        calendarEvents[i].start = parse(calendarEvents[i].start);
        calendarEvents[i].end = parse(calendarEvents[i].end);
      }
      this.events = calendarEvents;
      this.refresh.next();
    }
  }

  ngAfterViewInit(): void {
    flatpickr('.flatpickr', {
      enableTime: true,
      dateFormat: 'Y-m-dTH:i',
      altFormat: 'F j, Y H:i'
    });
  }

  ngOnDestroy() {
    this.storageEvents();
  }

  private storageEvents() {
    this.storageService.setItem('inception.calendar', this.events);
  }

  handleEvent(event: any): void {
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
        end: addHours(event, 1),
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

  changeDateInput(event: CalendarEvent) {
    event.start = new Date(event.start);
    event.end = new Date(event.end);
  }
}
