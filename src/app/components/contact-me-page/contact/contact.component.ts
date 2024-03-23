import { Component } from '@angular/core';
import { TitleComponent } from '../../../utils/title/title.component';
import { CustomBtnComponent } from '../../../utils/custom-btn/custom-btn.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, CustomBtnComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
