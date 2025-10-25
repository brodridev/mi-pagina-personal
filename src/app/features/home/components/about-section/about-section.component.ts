import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../../../../data/personal-data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  personalInfo = personalInfo;

  // Datos de ejemplo - personalízalos según tu información
  personalTraits = [
    'Curioso y siempre aprendiendo',
    'Amante de los desafíos',
    'Enfoque en la calidad',
    'Colaborativo por naturaleza',
    'Orientado a resultados',
    'Mente abierta y adaptable'
  ];

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getBirthYear(): number {
    // Personaliza este valor con tu año de nacimiento
    return 1990; // Ejemplo
  }

  getExperienceYears(): number {
    // Personaliza este valor con tus años de experiencia
    return 8; // Ejemplo
  }
}