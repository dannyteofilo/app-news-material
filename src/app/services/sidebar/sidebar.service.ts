import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private items: any = [
    {
      title: 'Everything',
      url: '/everything',
      icon: 'https://newsapi.org/favicon-32x32.png'
    },
    {
      title: 'By Country',
      url: '/country',
      icon: 'https://newsapi.org/favicon-32x32.png'
    }

  ];
  constructor() { }

  getItems() {
    return this.items;
  }
}
