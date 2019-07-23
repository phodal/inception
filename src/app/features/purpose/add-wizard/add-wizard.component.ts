import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-wizard',
  templateUrl: './add-wizard.component.html',
  styleUrls: ['./add-wizard.component.scss']
})
export class AddWizardComponent implements OnInit {
  public steps: string[];
  public selectedStep = 0;
  STEP_MAPS = {
    purpose: {
      name: '项⽬背景'
    },
    canvas: {
      name: '商业画布'
    },
    balance: {
      name: '权衡滑块'
    },
    metric: {
      name: '成功度量标准'
    }
  };

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.steps = this.route.snapshot.routeConfig.children.map(child => {
      return child.path;
    });
    const step = this.steps[0];
    this.router.navigate([step], { relativeTo: this.route });
  }

  selectionChanged(event: any) {
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], { relativeTo: this.route });
  }
}
