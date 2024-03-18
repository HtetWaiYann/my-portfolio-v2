import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project-image',
  standalone: true,
  imports: [],
  templateUrl: './project-image.component.html',
  styleUrl: './project-image.component.scss'
})
export class ProjectImageComponent {
  @Input() image: string = "";
  @Input() name: string = "";
  @Input() reverse: boolean = false;
}
