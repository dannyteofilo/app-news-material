import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private items: any = [
    {
      title: 'News API',
      url: '/newsapi',
      icon: 'https://newsapi.org/favicon-32x32.png'
    }

  ];
  constructor() { }

  getItems() {
    return this.items;
  }
}
