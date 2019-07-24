import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  markdownData = '';

  constructor(private http: HttpClient) {
    this.http.get('/assets/help/help.md', { responseType: 'text' })
      .subscribe((data: string) => {
        this.markdownData = data;
      });
  }

  ngOnInit() {
  }

}
