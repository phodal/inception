import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService } from '../../../core/services/storage.service';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-review-timeline',
  templateUrl: './review-timeline.component.html',
  styleUrls: ['./review-timeline.component.scss']
})
export class ReviewTimelineComponent implements OnInit, AfterViewInit {
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      events: this.formBuilder.array([
        this.getNewAction()
      ])
    });
  }

  ngAfterViewInit(): void {
    const that = this;
    setTimeout(() => that.initForm(that), 20);
  }

  initForm(that) {
    that.form.valueChanges.subscribe(() => {
      that.formChange.emit(that.form);
      that.submitTimelineForm();
    });

    const events = that.storage.getItem('pdp.review.events');
    if (isEmpty(events)) {
      return;
    }

    console.log(events, isEmpty(events));

    const control = that.form.get('events') as FormArray;
    control.clear();
    events.events.forEach(event => {
      control.push(that.formBuilder.group({
        date: event.date,
        color: event.color,
        content: event.content
      }));
    });
  }

  addUnit() {
    const control = this.form.get('events') as FormArray;
    control.push(this.getNewAction());
  }

  get formData() {
    return this.form.get('events') as FormArray;
  }

  removeUnit(i: number) {
    const control = this.form.get('events') as FormArray;
    control.removeAt(i);
  }

  private getNewAction() {
    return this.formBuilder.group({
      date: ['', Validators.required],
      color: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  submitTimelineForm() {
    this.storage.setItem('pdp.review.events', this.form.value);
  }
}
