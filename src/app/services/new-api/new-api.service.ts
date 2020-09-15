import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';
import { GLOBAL } from './global.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewApiService {

  private url: string;
  private key: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.urlApi;
    this.key = GLOBAL.key;
  }

  public error = (err: HttpErrorResponse) => {
    console.warn('error: ', err.message);
    return of([]);
  }

  private request(endPoint) {
    return this.http.get(`${this.url}${endPoint}&apiKey=${this.key}`)
      .pipe(
        pluck('articles'),
        catchError(this.error)
      );
  }

  public getTopHeadlines() {
    return this.request(`top-headlines?country=mx`);
  }

  public getTopHeadlinesByCountry(id: string) {
    return this.request(`top-headlines?country=${id}`);
  }

  public getEverything(search: string) {
    console.log('search: : : ',search)
    return this.request(`everything?q=${search}`);
  }

}
