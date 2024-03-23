import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home-page/home/home.component';
import { AboutmeComponent } from './components/about-me-page/aboutme/aboutme.component';
import { BackgroundComponent } from './components/background-page/background/background.component';
import { SkillsComponent } from './components/skills-page/skills/skills.component';
import { ProjectsComponent } from './components/projects-page/projects/projects.component';
import { ContactComponent } from './components/contact-me-page/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutmeComponent, BackgroundComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
}
