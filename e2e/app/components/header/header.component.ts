import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content.service';
import {HeaderLink, HeaderLinkType} from '../../models/headerLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  constructor(private contentService: ContentService) { }

  get headerLinkType() { return HeaderLinkType; }

  links: HeaderLink[];

  ngOnInit() {
    this.links = this.contentService.headers;
  }

}
