import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
