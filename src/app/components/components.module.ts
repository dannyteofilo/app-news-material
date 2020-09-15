import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CardComponent } from './card/card.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DateComponent, CardComponent, PreloaderComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DateComponent, CardComponent, PreloaderComponent, SearchComponent]
})
export class ComponentsModule { }
