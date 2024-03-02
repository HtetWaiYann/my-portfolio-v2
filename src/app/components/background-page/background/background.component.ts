import { Component, ElementRef, HostListener } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [EducationComponent, WorkExperienceComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent {
  isVisible = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    this.isVisible = rect.top <= windowHeight / 2 && rect.bottom >= 0;
  }
}
