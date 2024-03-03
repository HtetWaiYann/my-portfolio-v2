import { Component } from '@angular/core';
import { SkillInfoComponent } from '../skill-info/skill-info.component';
import { SkillType } from '../../../types/skill';
import { InfoService } from '../../../services/info.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillInfoComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: SkillType[] = this.infoService.skills;

  constructor(private infoService: InfoService){
  }
}
