import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [SidebarComponent, NoPageFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, NoPageFoundComponent]
})
export class SharedModule { }
