import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../services/service.index';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public preloader: PreloaderService) { }

  ngOnInit() {
  }

}
