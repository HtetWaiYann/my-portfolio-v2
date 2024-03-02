import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  standalone: true,
  imports: [],
  templateUrl: './custom-btn.component.html',
  styleUrl: './custom-btn.component.scss'
})
export class CustomBtnComponent {
  @Input() text: string = "";

}
