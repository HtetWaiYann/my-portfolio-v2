import { Component } from '@angular/core';
import { TitleComponent } from '../../../utils/title/title.component';
import { InfoService } from '../../../services/info.service';
import { Education } from '../../../types/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations: Education[] = this.infoService.educations;

  constructor(private infoService: InfoService){
  }
}
