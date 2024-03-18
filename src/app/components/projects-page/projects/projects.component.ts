import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../../utils/title/title.component';
import { InfoService } from '../../../services/info.service';
import { ProjectType } from '../../../types/project';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleComponent, ProjectDetailComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects : ProjectType[] = this.infoService.projects;

  constructor(private infoService: InfoService){

  }

}
