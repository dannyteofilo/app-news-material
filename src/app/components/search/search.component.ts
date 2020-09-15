import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() response: EventEmitter<any> = new EventEmitter();

  user: any = {
    search: ''
  };

  public search: string;

  constructor() { }

  ngOnInit() {}
  createForm() { }

  onSearch(e: NgForm) {
    console.log('on Search', e,e.valid);
    console.log( e );

    console.log( e.value );
    if (e.valid) {
      this.response.emit(e.value);
    }
  }

}
