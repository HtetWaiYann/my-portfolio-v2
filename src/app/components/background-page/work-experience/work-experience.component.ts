import { Component } from '@angular/core';
import { TitleComponent } from '../../../utils/title/title.component';
import { InfoService } from '../../../services/info.service';
import { WorkExperience } from '../../../types/workExperience';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {

  workExperience: WorkExperience[] = this.infoService.workExperience;

  constructor(private infoService: InfoService){
  }
}
