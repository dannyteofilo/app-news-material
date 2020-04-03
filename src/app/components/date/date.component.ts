import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  date: string = null;
  constructor() { }

  ngOnInit() {
    const today = new Date();


    let aux = today.toString()
    const arrDate = aux.split(' ')
    this.date = `${arrDate[0]}, ${arrDate[1]} ${arrDate[2]}`;
  }

}
