import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarEventAction, CalendarEvent, CalendarView, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import {
  startOfDay,
  subDays,
  addDays, addHours, endOfDay
} from 'date-fns';

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
export class HomeComponent implements OnInit {
  view: CalendarView = CalendarView.Day;
  CalendarView = CalendarView;
  refresh: Subject<any> = new Subject();
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

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

  constructor() {
  }

  ngOnInit() {
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
  }

  eventTimesChanged($event: CalendarEventTimesChangedEvent<any>) {

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

    this.refresh.next();
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }
}
