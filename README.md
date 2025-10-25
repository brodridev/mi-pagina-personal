# Mi Página Personal 🌐

Una página web personal moderna construida con Angular 20, Tailwind CSS y funcionalidades de navegación avanzadas.

[![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.19-F69220?style=flat-square&logo=pnpm)](https://pnpm.io/)

> 🚀 **Live Demo:** [Ver sitio en vivo](#) (Próximamente)  
> 📚 **Repositorio:** https://github.com/brodridev/mi-pagina-personal  
> 🎨 **Fuente:** Victor Mono | 🎯 **Tema:** Azul personalizado

## 🚀 Características

- **Angular 20** con Signals para manejo de estado reactivo
- **Tailwind CSS v3** con tema azul personalizado  
- **Dark/Light Mode** con persistencia en localStorage
- **Navegación por scroll suave** entre secciones
- **Botón Back-to-Top** animado
- **SEO optimizado** con meta tags dinámicos
- **Responsive Design** para todos los dispositivos
- **Animaciones suaves** y transiciones elegantes

## 🎨 Secciones Incluidas

- **Intro/Hero** - Presentación principal con foto y datos básicos
- **Sobre Mí** - Historia personal y trasfondo
- **Profesional** - Trayectoria y enfoque profesional  
- **Intereses** - Gustos, hobbies y pasatiempos
- **Valores** - Principios y filosofía personal
- **Estilo de Vida** - Rutinas y modo de vivir
- **Conecta** - Información de contacto y redes sociales

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- pnpm (instalar con: `npm install -g pnpm`)

### Clonado e Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/brodridev/mi-pagina-personal.git
   cd mi-pagina-personal
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm start
   ```

3. **Abrir en el navegador:**
   Navega a `http://localhost:4200/`

### Comandos Disponibles

```bash
# Desarrollo  
pnpm start                # Servidor de desarrollo
pnpm dev                 # Alias para start

# Construcción
pnpm build              # Build de desarrollo
pnpm build:prod         # Build de producción

# Pruebas
pnpm test               # Ejecutar tests
pnpm test:watch         # Tests en modo watch

# Linting y formato
pnpm lint               # Verificar código
```

## 🛠️ Desarrollo

### Scaffolding de Componentes

Para generar nuevos componentes:

```bash
ng generate component nombre-componente
# o
pnpm ng g c nombre-componente
```

## 📝 Personalización

### 1. Información Personal
Edita el archivo `src/app/data/personal-data.ts` con tu información:

```typescript
export const personalInfo = signal<PersonalInfo>({
  name: 'Tu Nombre Real',
  title: 'Tu Título Profesional', 
  tagline: 'Tu frase personal',
  bio: 'Tu historia...',
  profileImage: '', // Vacío para usar avatar SVG
  // ... más campos
});
```

### 2. Colores y Tema
Modifica `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Tu color azul favorito
    // ... más tonalidades
  }
}
```

### 3. Avatar por Defecto
El proyecto usa iconos SVG en lugar de imágenes para un diseño más limpio y consistente.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
