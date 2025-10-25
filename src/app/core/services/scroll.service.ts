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
    const scrollPosition = window.scrollY + 100; // Offset para el header

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          return sectionId;
        }
      }
    }
    
    return 'intro'; // Default
  }
}