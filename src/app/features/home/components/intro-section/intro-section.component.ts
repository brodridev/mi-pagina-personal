import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../../../../data/personal-data';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.scss'
})
export class IntroSectionComponent {
  personalInfo = personalInfo;

  scrollToAbout(): void {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}