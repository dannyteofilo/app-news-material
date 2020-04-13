import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  public loading: boolean;

  constructor() {
    this.loading = false;
  }

  setStatus() {
    this.loading = !this.loading
  }
}
