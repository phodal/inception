import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inception-nav-bar',
  templateUrl: './inception-nav-bar.component.html',
  styleUrls: ['./inception-nav-bar.component.scss']
})
export class InceptionNavBarComponent implements OnInit {
  linksData = [
    {
      link: '/inception/schedule',
      name: '日程'
    },
    {
      link: '/inception/vision',
      name: '远景'
    },
    {
      link: '/inception/positioning',
      name: '定位'
    },
    {
      link: '/inception/personas',
      name: '用户'
    },
    {
      link: '/inception/business',
      name: '业务架构'
    },
    {
      link: '/inception/technical',
      name: '技术架构'
    },
    {
      link: '/inception/planning',
      name: '计划'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
