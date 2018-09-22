import {Component, Input, OnInit} from '@angular/core';
import {InfoCard} from '../../models/infoCard';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.styl']
})
export class InfoCardComponent implements OnInit {
  @Input() card: InfoCard;

  constructor() { }

  ngOnInit() {
  }

}
