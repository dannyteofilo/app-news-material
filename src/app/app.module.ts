import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DateComponent } from './components/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
