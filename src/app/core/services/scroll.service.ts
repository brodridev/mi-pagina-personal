import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  // Signal para la posición actual del scroll
  scrollPosition = signal<number>(0);
  
  // Signal para determinar si mostrar el botón back-to-top
  showBackToTop = signal<boolean>(false);

  constructor() {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    window.addEventListener('scroll', () => {
      const position = window.scrollY;
      this.scrollPosition.set(position);
      
      // Mostrar back-to-top después de 300px
      this.showBackToTop.set(position > 300);
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Offset para compensar el header fijo
      const elementPosition = element.offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  getCurrentSection(): string {
    const sections = ['intro', 'about', 'professional', 'interests', 'values', 'lifestyle', 'connect'];
    const scrollPosition = window.scrollY + 120; // Offset para el header (aumentado para mejor detección)
    let currentSection = 'intro';

    // Recorrer las secciones en orden inverso para detectar la última visible
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionId = sections[i];
      const element = document.getElementById(sectionId);
      
      if (element) {
        const top = element.offsetTop;
        
        // Si hemos pasado el inicio de esta sección, es la sección actual
        if (scrollPosition >= top - 50) { // Margen de 50px para mejor UX
          currentSection = sectionId;
          break;
        }
      }
    }
    
    return currentSection;
  }
}