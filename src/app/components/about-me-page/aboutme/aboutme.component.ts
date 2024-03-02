import { Component, ElementRef, HostListener } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ImageComponent, InfoComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  isVisible = false;

  constructor(private elementRef: ElementRef) { }
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    this.isVisible = rect.top <= (windowHeight/2) && rect.bottom >= 0;
  }

}
