import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../../interfaces/card.component.interface';
import { cardDataFixture } from '../../fixtures/info-card.fixture';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: CardData;
  constructor() {
    this.data = {
      ...cardDataFixture,
      source: { ...cardDataFixture.source }
    };
  }

  ngOnInit() {}

  goToUrl(url: string) {
    window.open(url, '_blank');
  }
}
