import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollNavigationComponent } from './shared/components/scroll-navigation/scroll-navigation.component';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { IntroSectionComponent } from './features/home/components/intro-section/intro-section.component';
import { AboutSectionComponent } from './features/home/components/about-section/about-section.component';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ScrollNavigationComponent,
    BackToTopComponent,
    IntroSectionComponent,
    AboutSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  private seoService = inject(SeoService);
  profesionalBackground = signal(
    'A lo largo de mi camino como desarrollador he pasado por varias etapas que me han hecho crecer tanto técnica como personalmente. Empecé en Davinci Technologies LATAM, donde aprendí a moverme con Angular y JavaScript creando soluciones para GSuite. Después, en Mobiera, me metí de lleno en el desarrollo de plataformas con Angular, React Native e Ionic, enfocándome en crear componentes reutilizables y trabajar con metodologías ágiles. En Credyty asumí el reto de ser líder técnico Front End, coordinando al equipo y asegurando la calidad del código. Más adelante, en Ilumno y Periferia IT Group, seguí fortaleciendo mi experiencia con Angular, NgRx y Redux, construyendo librerías de componentes y conectando APIs. Hoy en día, en Accenture Colombia, participo en el proyecto Adidas, desarrollando componentes con React, TypeScript y Redux RTK, además de apoyar a otros desarrolladores y revisar sus pull requests. En resumen, ha sido un recorrido lleno de aprendizaje, desafíos y crecimiento, siempre con la meta de crear productos sólidos y bien hechos.'
  );
  professionalFocus = signal(
    'Full Stack Development, Agile Methodologies, Tech Leadership, DevOps'
  );

  lifestyleDescription = signal(
    'Soy una persona muy familiar y eso marca mucho mi forma de vivir; disfruto pasar tiempo con los míos y con mis dos perritas, Freya, una Shih Tzu de cuatro años, y Nala, una Alusky llena de energía que siempre me saca una sonrisa. El fútbol es mi gran pasión, pero también valoro la tranquilidad y el orden que he logrado gracias a los principios de Hábitos Atómicos, lo que me ha ayudado a organizar mejor mi tiempo y mantener el equilibrio entre trabajo y vida personal. Me encanta colaborar con los demás, aprender en equipo y compartir lo que sé. Cuando tengo un rato libre, disfruto mucho cocinar, probar nuevas recetas y relajarme mientras lo hago. Estoy en una búsqueda constante de crecimiento espiritual y profesional, siempre tratando de ser una mejor versión de mí, tanto dentro como fuera del trabajo.'
  );

  sampleInterests = [
    { title: 'Música', icon: '🎵', description: 'Rock, Metal, New Metal' },
    {
      title: 'Deportes',
      icon: '⚽',
      description: 'Fútbol, Tenis de mesa, todos los deportes que pueda aprender',
    },
    {
      title: 'Lectura',
      icon: '📚',
      description: 'Relato de un asesino, La ciudad de los umbrales, Hábitos Atómicos',
    },
    {
      title: 'Viajes',
      icon: '✈️',
      description: 'Japón, Alemania, Noruega, España, Paises Bajos, Escocia',
    },
  ];

  sampleValues = [
    {
      title: 'Autenticidad',
      description: 'Creo en ser genuino y fiel a mis principios en todas las situaciones.',
    },
    {
      title: 'Crecimiento',
      description: 'La mejora continua y el aprendizaje constante son fundamentales para mí.',
    },
    {
      title: 'Empatía',
      description:
        'Entender y conectar con los demás es esencial para construir relaciones significativas.',
    },
    {
      title: 'Equilibrio',
      description: 'Busco mantener un balance saludable entre el trabajo y la vida personal.',
    },
  ];

  ngOnInit(): void {
    // Configurar SEO inicial
    this.seoService.setDefaultSEO();
  }
}
