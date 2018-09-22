import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import {InfoCard} from '../../models/infoCard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  private boxes: InfoCard[];

  ngOnInit() {
    this.boxes = this.contentService.contact;
  }

}
