import { Component, OnInit, inject } from '@angular/core';
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
    AboutSectionComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  private seoService = inject(SeoService);

  // Datos de ejemplo para las secciones
  sampleInterests = [
    { title: 'Música', icon: '🎵', description: 'Rock, Jazz, Clásica' },
    { title: 'Deportes', icon: '⚽', description: 'Fútbol, Natación' },
    { title: 'Lectura', icon: '📚', description: 'Novela, Biografías' },
    { title: 'Viajes', icon: '✈️', description: 'Culturas, Paisajes' }
  ];

  sampleValues = [
    {
      title: 'Autenticidad',
      description: 'Creo en ser genuino y fiel a mis principios en todas las situaciones.'
    },
    {
      title: 'Crecimiento',
      description: 'La mejora continua y el aprendizaje constante son fundamentales para mí.'
    },
    {
      title: 'Empatía',
      description: 'Entender y conectar con los demás es esencial para construir relaciones significativas.'
    },
    {
      title: 'Equilibrio',
      description: 'Busco mantener un balance saludable entre el trabajo y la vida personal.'
    }
  ];

  ngOnInit(): void {
    // Configurar SEO inicial
    this.seoService.setDefaultSEO();
  }
}
