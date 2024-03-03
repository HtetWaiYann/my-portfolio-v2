import { Component, ElementRef, HostListener } from '@angular/core';
import { SkillInfoComponent } from '../skill-info/skill-info.component';
import { SkillType } from '../../../types/skill';
import { InfoService } from '../../../services/info.service';
import { TitleComponent } from '../../../utils/title/title.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillInfoComponent, TitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  isVisible = false;
  skills: SkillType[] = this.infoService.skills;

  constructor(
    private infoService: InfoService,
    private elementRef: ElementRef
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    this.isVisible = rect.top <= windowHeight / 2 && rect.bottom >= 0;
  }
}
