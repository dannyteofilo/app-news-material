import { Component, OnInit } from '@angular/core';
import { NewApiService, PreloaderService } from 'src/app/services/service.index';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

  public data: any;
  constructor(public service: NewApiService, private preloader: PreloaderService) { }

  ngOnInit() {
    this.preloader.setStatus();
    this.service.getTopHeadlines().subscribe((resp: any) => {
      if (resp) {
        this.data = resp;
      } else {
        console.warn('Not data found');
      }
      this.preloader.setStatus();
    })
  }

}
