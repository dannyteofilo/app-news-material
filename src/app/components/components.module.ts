import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [DateComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [DateComponent, CardComponent]
})
export class ComponentsModule { }
