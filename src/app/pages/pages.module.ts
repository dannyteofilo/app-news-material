import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { NewsApiComponent } from './news-api/news-api.component';



@NgModule({
  declarations: [PagesComponent, DashboardComponent, NewsApiComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ComponentsModule,
    PAGES_ROUTES
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
