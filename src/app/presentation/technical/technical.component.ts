import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {
  rows: any;
  placeholder: any;
  columns: any;

  constructor() {
  }

  ngOnInit() {
    this.placeholder = '搜索...';
    this.columns = [
      { name: '用途', prop: 'usage' },
      { name: '用途2', prop: 'usage2' }
    ];

    this.rows = [
      {
        usage: '客户付款 1',
        usage2: '客户付款 1 用途2'
      }, {
        usage: '客户付款 2',
        usage2: '客户付款 2 用途2'
      }
    ];
  }

}
