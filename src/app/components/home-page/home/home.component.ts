import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MouseIconComponent } from '../../../utils/mouse-icon/mouse-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileComponent, MouseIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
 
}
