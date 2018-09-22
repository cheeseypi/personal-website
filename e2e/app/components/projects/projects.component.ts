import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import {InfoCard} from '../../models/infoCard';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.styl']
})
export class ProjectsComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  private boxes: InfoCard[];

  ngOnInit() {
    this.boxes = this.contentService.projects;
  }

}
