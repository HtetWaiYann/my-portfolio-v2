import { Component } from '@angular/core';
import { TitleComponent } from '../../../utils/title/title.component';
import { CustomBtnComponent } from '../../../utils/custom-btn/custom-btn.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [TitleComponent, CustomBtnComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

}
