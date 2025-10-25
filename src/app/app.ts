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
  template: `
    <!-- Navegación fija -->
    <app-scroll-navigation></app-scroll-navigation>

    <!-- Contenido principal -->
    <main class="pt-16">
      <!-- Sección Intro/Hero -->
      <app-intro-section></app-intro-section>

      <!-- Sección Sobre Mí -->
      <app-about-section></app-about-section>

      <!-- Sección Profesional -->
      <section 
        id="professional" 
        class="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Mi Trayectoria Profesional
          </h2>
          <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-12"></div>
          
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
              Aquí puedes hablar sobre tu carrera profesional
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Describe tu enfoque profesional, lo que te apasiona de tu trabajo, 
              tus valores en el ámbito laboral, y cómo has evolucionado a lo largo 
              de tu carrera. Este es el espacio para mostrar tu lado profesional 
              sin entrar en detalles técnicos específicos.
            </p>
          </div>
        </div>
      </section>

      <!-- Sección Intereses -->
      <section 
        id="interests" 
        class="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
      >
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Mis Intereses
            </h2>
            <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              *ngFor="let interest of sampleInterests"
              class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-3xl mb-4">{{ interest.icon }}</div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {{ interest.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ interest.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Valores -->
      <section 
        id="values" 
        class="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Mis Valores
          </h2>
          <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-12"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              *ngFor="let value of sampleValues"
              class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                {{ value.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Estilo de Vida -->
      <section 
        id="lifestyle" 
        class="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Mi Estilo de Vida
          </h2>
          <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-12"></div>
          
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Aquí puedes describir cómo te gusta vivir el día a día, tus rutinas, 
              hábitos que consideras importantes, lugares favoritos, y tu filosofía 
              de vida en general. Es el espacio para mostrar tu personalidad y 
              estilo de vida único.
            </p>
          </div>
        </div>
      </section>

      <!-- Sección Conecta -->
      <section 
        id="connect" 
        class="py-20 bg-primary-600 dark:bg-primary-800 px-4 sm:px-6 lg:px-8"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-8">
            Conectemos
          </h2>
          <div class="w-24 h-1 bg-white mx-auto rounded-full mb-12"></div>
          
          <p class="text-primary-100 text-lg mb-8">
            Si te interesa conocer más sobre mí o simplemente quieres charlar, 
            estaré encantado/a de conectar contigo.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:tu.email@example.com"
              class="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-full hover:bg-primary-50 transition-colors"
            >
              Enviar Email
            </a>
            <a 
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              class="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Botón volver arriba -->
    <app-back-to-top></app-back-to-top>
  `,
  styleUrl: './app.scss'
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
