import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ContextMenuModule, ContextMenuService } from 'ngx-contextmenu';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { StorageService } from '../../core/services/storage.service';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
