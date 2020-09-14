import { Component, OnInit } from '@angular/core';
import { NewApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {

  public data: any;
  public search: string;

  constructor(public service: NewApiService) {
    this.search = 'bitcoin';
  }

  ngOnInit() {
    this.service.getEverything(this.search).subscribe((resp: any) => {
      if (resp) {
        this.data = resp;
      } else {
        console.warn('Not data found');
      }
    });
  }

}
