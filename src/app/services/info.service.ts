import { Injectable } from '@angular/core';
import { SocialLinks } from '../types/socialLinks';
import { WorkExperience } from '../types/workExperience';
import { Education } from '../types/education';
import { SkillType } from '../types/skill';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor() {}

  public socialLinks: SocialLinks[] = [
    {
      icon: 'fa-brands fa-square-github',
      link: 'https://github.com',
    },
    {
      icon: 'fa-brands fa-linkedin',
      link: 'https://linkedin.com',
    },
    {
      icon: 'fa-brands fa-square-x-twitter',
      link: 'https://twitter.com',
    },
  ];

  public workExperience: WorkExperience[] = [
    {
      company: 'Freelancer',
      role: 'Full Stack Developer',
      date: 'March 2024 - Present',
      description:
        'I worked on a team of 5 to develop a new mobile application for the company. I was responsible for the front-end development of the application using React Native.',
    },
    {
      company: 'Company B',
      role: 'Full-Stack Developer',
      date: 'Jan 2018',
      description:
        'I worked on a team of 10 to develop a new web application for the company. I was responsible for the front-end and back-end development of the application using Angular and Node.js.',
    },
    {
      company: 'Company C',
      role: 'Back-End Developer',
      date: 'Feb 2017',
      description:
        'I worked on a team of 3 to develop a new web application for the company. I was responsible for the back-end development of the application using Node.js.',
    },
  ];

  public educations: Education[] = [
    {
      institution: 'University A',
      degree: 'Bachelor of Science in Computer Science',
      date: 'Dec 2016',
      description: 'I graduated with a 3.5 GPA.',
    },
    {
      institution: 'University B',
      degree: 'Master of Science in Computer Science',
      date: 'Dec 2018',
      description: 'I graduated with a 3.5 GPA.',
    },
  ];

  public skills: SkillType[] = [
    {
      title: 'Front-End',
      skills: [
        {
          icon: 'Angular',
          name: 'Angular',
        },
        {
          icon: 'React',
          name: 'React',
        },
        {
          icon: 'HTML',
          name: 'HTML',
        },
        {
          icon: 'CSS',
          name: 'CSS',
        },
        {
          icon: 'JavaScript',
          name: 'JavaScript',
        },
        {
          icon: 'TypeScript',
          name: 'TypeScript',
        },
        
      ],
    },
    {
      title: 'Back-End',
      skills: [
        {
          icon: 'Python',
          name: 'Python',
        },
        {
          icon: 'Node.js',
          name: 'Node.js',
        },
        {
          icon: 'Express',
          name: 'Express',
        },
        {
          icon: 'MongoDB',
          name: 'MongoDB',
        },
        {
          icon: 'PostgreSQL',
          name: 'PostgreSQL',
        }
      ],
    },
    {
      title: 'Other',
      skills: [
        {
          icon: 'AWS',
          name: 'AWS',
        },
        {
          icon: 'Digital Ocean',
          name: 'Digital Ocean',
        },
        {
          icon: 'Git',
          name: 'Git',
        },
        {
          icon: 'Asana',
          name: 'Asana',
        },
        {
          icon: 'Agile',
          name: 'Agile',
        },
        {
          icon: 'Scrum',
          name: 'Scrum',
        },
      ],
    }

  ];
}
