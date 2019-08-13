import { Component, OnInit } from '@angular/core';

const TECH_CHECKLIST = require('../../../../assets/data/checklists/technology.json');
const DOMAIN_CHECKLIST = require('../../../../assets/data/checklists/domain.json');
const PROJECT_CHECKLIST = require('../../../../assets/data/checklists/process.json');
const PEOPLE_CHECKLIST = require('../../../../assets/data/checklists/people.json');

@Component({
  selector: 'feature-new-project-checklist',
  templateUrl: './new-project-checklist.component.html',
  styleUrls: ['./new-project-checklist.component.scss']
})
export class NewProjectChecklistComponent implements OnInit {
  techChecklist: any[];

  constructor() {
  }

  ngOnInit() {
    this.techChecklist = TECH_CHECKLIST;
  }

}
