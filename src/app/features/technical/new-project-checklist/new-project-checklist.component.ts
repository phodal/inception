import { Component, OnInit } from '@angular/core';
import TECH_CHECKLIST from '../../../../assets/data/checklists/technology.json';
import DOMAIN_CHECKLIST from '../../../../assets/data/checklists/domain.json';
import PROJECT_CHECKLIST from '../../../../assets/data/checklists/process.json';
import PEOPLE_CHECKLIST from '../../../../assets/data/checklists/people.json';

@Component({
  selector: 'feature-new-project-checklist',
  templateUrl: './new-project-checklist.component.html',
  styleUrls: ['./new-project-checklist.component.scss']
})
export class NewProjectChecklistComponent implements OnInit {
  techChecklist: any[];

  constructor() { }

  ngOnInit() {
    this.techChecklist = TECH_CHECKLIST[1].subitems.map((item) => {
      return {
        task: item.title
      };
    });
  }

}
