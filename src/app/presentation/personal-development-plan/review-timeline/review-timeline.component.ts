import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-timeline',
  templateUrl: './review-timeline.component.html',
  styleUrls: ['./review-timeline.component.scss']
})
export class ReviewTimelineComponent implements OnInit {
  tomorrow = new Date(2017, 9, 20, 14);

  constructor() {
  }

  ngOnInit() {
  }

}
