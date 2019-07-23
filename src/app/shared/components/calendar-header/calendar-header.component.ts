import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';

import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'component-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
})
export class CalendarHeaderComponent implements OnInit {
  @Input() view: string;
  @Input() viewDate: Date;
  @Input() locale = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor(private storage: StorageService) {
    console.log(this.view);
  }

  ngOnInit(): void {
    const lastView = this.storage.getItem('calender.view');
    if (!isEmpty(lastView)) {
      this.view = lastView;
      this.viewChange.emit(lastView);
    }
  }

  changeView(view: string) {
    this.viewChange.emit(view);
    this.storage.setItem('calender.view', view);
  }
}
