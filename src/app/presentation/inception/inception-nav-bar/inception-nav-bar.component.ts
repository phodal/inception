import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const Mousetrap = require('mousetrap');

@Component({
  selector: 'inception-nav-bar',
  templateUrl: './inception-nav-bar.component.html',
  styleUrls: ['./inception-nav-bar.component.scss']
})
export class InceptionNavBarComponent implements OnInit, AfterViewInit {
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
  private currentRouterIndex = 0;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.linksData.forEach((link, index) => {
      if (link.link === this.router.url) {
        this.currentRouterIndex = index;
      }
    });

    console.log(this.currentRouterIndex);

    Mousetrap.bind('left', this.moveRouterToLeft.bind(this));
    Mousetrap.bind('right', this.moveRouterToRight.bind(this));
  }

  private moveRouterToRight() {
    this.currentRouterIndex++;
    if (this.currentRouterIndex >= this.linksData.length) {
      this.currentRouterIndex = 0;
    }
    this.routerToIndex();
    return true;
  }

  private moveRouterToLeft() {
    this.currentRouterIndex--;
    if (this.currentRouterIndex <= 0) {
      this.currentRouterIndex = this.linksData.length - 1;
    }
    this.routerToIndex();
    return true;
  }

  private routerToIndex() {
    this.router.navigateByUrl(this.linksData[this.currentRouterIndex].link);
  }
}
