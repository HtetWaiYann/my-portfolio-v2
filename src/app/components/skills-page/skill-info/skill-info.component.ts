import { Component, Input } from '@angular/core';
import { Skill } from '../../../types/skill';
import { TitleComponent } from '../../../utils/title/title.component';

@Component({
  selector: 'app-skill-info',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './skill-info.component.html',
  styleUrl: './skill-info.component.scss'
})
export class SkillInfoComponent {
  @Input() title: string = "";
  @Input() skills: Skill[] = [];
}
