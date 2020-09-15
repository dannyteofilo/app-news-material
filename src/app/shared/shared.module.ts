import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SidebarComponent, NoPageFoundComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, NoPageFoundComponent, FooterComponent]
})
export class SharedModule { }
