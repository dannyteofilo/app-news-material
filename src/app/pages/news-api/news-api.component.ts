import { Component, OnInit } from '@angular/core';
import { NewApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.scss']
})
export class NewsApiComponent implements OnInit {

  countryId: string;
  public data: [];
  constructor(public service: NewApiService) {
    this.countryId = 'us';
  }

  ngOnInit() {
    this.service.getTopHeadlinesByCountry(this.countryId).subscribe((resp: any) => {
      if (resp) {
        this.data = resp;
      } else {
        console.warn('Not data found');
      }
    });
  }

}
