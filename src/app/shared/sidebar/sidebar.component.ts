import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public items: any;
  constructor(private sidebar: SidebarService) { }

  ngOnInit() {
    this.items = this.sidebar.getItems();
  }

}
