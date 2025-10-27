import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';
import { NAVIGATION_ITEMS } from '../../../data/navigation-menu';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-scroll-navigation',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './scroll-navigation.component.html',
  styleUrl: './scroll-navigation.component.scss'
})
export class ScrollNavigationComponent {
  scrollService = inject(ScrollService);
  navigationItems = NAVIGATION_ITEMS;
  mobileMenuOpen = signal(false);
  activeSection = signal('intro'); // Cambié el nombre para ser más claro

  scrollToSection(anchor: string): void {
    // Establecer la sección activa cuando se hace clic
    this.activeSection.set(anchor);
    this.scrollService.scrollToElement(anchor);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  getCurrentSectionClass(anchor: string): string {
    const isActive = this.activeSection() === anchor;
    return isActive 
      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800';
  }
}