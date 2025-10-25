import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  updateSEO(data: SEOData): void {
    // Actualizar título
    this.titleService.setTitle(data.title);

    // Meta tags básicos
    this.meta.updateTag({ name: 'description', content: data.description });
    
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    }
    
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
    }

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    
    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }
  }

  setDefaultSEO(): void {
    const defaultData: SEOData = {
      title: 'Mi Página Personal | [Tu Nombre]',
      description: 'Conoce más sobre mí: mi trayectoria profesional, intereses, valores y estilo de vida. Una ventana a quien soy como persona y profesional.',
      keywords: 'página personal, sobre mí, profesional, intereses, valores, lifestyle',
      url: window.location.origin
    };

    this.updateSEO(defaultData);
  }
}