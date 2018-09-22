import { Injectable } from '@angular/core';
import {HeaderLink, HeaderLinkType} from '../models/headerLink';
import {InfoCard} from '../models/infoCard';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  public headers: HeaderLink[] = [
    {
      name: 'Resume',
      type: HeaderLinkType.page,
      href: 'resume'
    },
    {
      name: 'LinkedIn',
      type: HeaderLinkType.link,
      href: 'https://www.linkedin.com/in/matt-doto'
    },
    {
      name: 'GitHub',
      type: HeaderLinkType.link,
      href: 'https://www.github.com/cheeseypi'
    },
    {
      name: 'Contact',
      type: HeaderLinkType.page,
      href: 'contact'
    },
    {
      name: 'Projects',
      type: HeaderLinkType.page,
      href: 'projects'
    }
  ];

  // noinspection TsLint
  public projects: InfoCard[] = [
    {
      title: 'McKinsey NSM',
      description: 'The Network State Master for McKinsey & Company. Allows for a single point of contact to get information about all intranet network devices. Has both a GUI and an API portion, both initially developed by me in Summer 2017 up to a Minimum Viable Product, allowing for users to dynamically receive up-to-date network information within programs or on the website. I continued working on it in my Spring 2018 internship there, and it is now in production use.'
    },
    {
      title: 'GroupMe Score Tracker',
      href: 'https://pypi.org/project/groupmescoretracker/',
      description: 'A bot for GroupMe that allows for users to track arbitrary "scores". Use it to spice up your group chats with a little friendly competition!',
    },
    {
      title: 'TravelPet Backend API',
      href: 'https://github.com/DuckHacksS2018-shrugface/travelpet-api',
      description: 'Project for DuckHacks 2018; A cloud-based virtual pet API. Taking the tamagotchis of old into the cloud!'
    }
  ];

  // noinspection TsLint
  public contact: InfoCard[] = [
    {
      title: 'matt@mattdoto.com',
      href: 'mailto:matt@mattdoto.com',
      description: 'I can be reached via email or via direct message on LinkedIn.'
    },
    {
      description: 'Eventually, there will be a direct contact form present here. Check back regularly!'
    }
  ];

  public about: InfoCard[] = [
    {
      description: 'I am a software developer & general computer nerd'
    },
    {
      description: 'I am in my third year at Stevens Institute of Technology'
    }
  ]
}
