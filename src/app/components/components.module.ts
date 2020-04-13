import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CardComponent } from './card/card.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [DateComponent, CardComponent, PreloaderComponent],
  imports: [
    CommonModule
  ],
  exports: [DateComponent, CardComponent,PreloaderComponent]
})
export class ComponentsModule { }
