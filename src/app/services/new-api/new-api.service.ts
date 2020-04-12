import { Injectable } from '@angular/core';
import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class NewApiService {

  private url: string;
  private key: string;

  constructor() {
    this.url = GLOBAL.urlApi;
    this.key = GLOBAL.key;
  }

  public error = (err: AjaxError) => {
    console.warn('error: ', err.message)
    return of([]);
  }

  private request(endPoint) {
    return ajax(`${this.url}${endPoint}&apiKey=${this.key}`).pipe(
      pluck('response'),
      catchError(this.error)
    )
  }

  public getTopHeadlines() {
    return this.request(`top-headlines?country=mx`);
  }

  public getTopHeadlinesByCountry(id: string) {
    return this.request(`top-headlines?country=${id}`);
  }

  public getEverything() {
    return this.request(`everything?q=bitcoin`);
  }


}
