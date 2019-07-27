import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ContextMenuModule, ContextMenuService } from 'ngx-contextmenu';

import { ScheduleComponent } from './schedule.component';
import { SharedModule } from '../../shared/shared.module';
import { StorageService } from '../../core/services/storage.service';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),
        FlatpickrModule,
        ContextMenuModule
      ],
      providers: [
        StorageService,
        ContextMenuService
      ],
      declarations: [ScheduleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
