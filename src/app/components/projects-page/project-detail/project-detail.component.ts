import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ProjectType } from '../../../types/project';
import { TitleComponent } from '../../../utils/title/title.component';
import { ProjectImageComponent } from '../project-image/project-image.component';
import { CustomBtnComponent } from '../../../utils/custom-btn/custom-btn.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [TitleComponent, ProjectImageComponent, CustomBtnComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit{
    
    @Input() project: ProjectType = {} as ProjectType;
    @Input() index: number = 0;
    reverse: boolean = false;
    isVisible = false;

    ngOnInit(): void {
      this.reverse= this.index % 2 === 0;
    }

    

  constructor(private elementRef: ElementRef) { }
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    this.isVisible = rect.top <= (windowHeight/2) && rect.bottom >= 0;
  }
    
}
