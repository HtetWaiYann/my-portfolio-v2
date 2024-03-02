import { Component } from '@angular/core';
import { InfoService } from '../../../services/info.service';
import { SocialLinks } from '../../../types/socialLinks';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {

  socialLinks : SocialLinks[] = this.infoService.socialLinks;
  constructor( private infoService: InfoService){
  }
}
