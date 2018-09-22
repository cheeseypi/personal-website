import {Component, Input, OnInit} from '@angular/core';
import { ContentService } from '../../services/content.service';
import {InfoCard} from '../../models/infoCard';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl']
})
export class HomepageComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  private boxes: InfoCard[];

  ngOnInit() {
    this.boxes = this.contentService.about;
  }

}
