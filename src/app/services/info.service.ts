import { Injectable } from '@angular/core';
import { SocialLinks } from '../types/socialLinks';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor() {}

  public socialLinks: SocialLinks[] = [
    {
      icon: 'fa-brands fa-square-github',
      link: 'https://github.com',
    },
    {
      icon: 'fa-brands fa-linkedin',
      link: 'https://linkedin.com',
    },
    {
      icon: 'fa-brands fa-square-x-twitter',
      link: 'https://twitter.com',
    },
  ];
}
