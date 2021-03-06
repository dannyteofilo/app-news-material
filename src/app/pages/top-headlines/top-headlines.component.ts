import { Component, OnInit } from '@angular/core';
import { NewApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

  public data: any;
  constructor(public service: NewApiService) { }

  ngOnInit() {
    this.service.getTopHeadlines().subscribe((resp: any) => {
      if (resp) {
        this.data = resp;
      } else {
        console.warn('Not data found');
      }
    });
  }

}
