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
      title: 'Sources',
      url: '/sources',
      icon: 'https://newsapi.org/favicon-32x32.png'
    }

  ];
  constructor() { }

  getItems() {
    return this.items;
  }
}
