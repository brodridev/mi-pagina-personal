import { signal } from '@angular/core';
import { 
  PersonalInfo, 
  ProfessionalInfo, 
  Interest, 
  Value, 
  LifestyleInfo, 
  ContactInfo 
} from '../core/models/personal-content.model';

// Información personal - PERSONALIZA ESTA INFORMACIÓN
export const personalInfo = signal<PersonalInfo>({
  name: 'Tu Nombre',
  title: 'Tu Título Profesional',
  tagline: 'Una frase que te represente perfectamente',
  bio: 'Aquí puedes escribir una breve descripción sobre ti, tu historia, de dónde vienes y qué te motiva en la vida. Esta es tu oportunidad de mostrar tu personalidad.',
  profileImage: '',
  email: 'tu.email@example.com',
  phone: '+34 123 456 789',
  location: 'Tu Ciudad, País'
});

// Información profesional
export const professionalInfo = signal<ProfessionalInfo>({
  currentRole: 'Tu Rol Actual',
  company: 'Tu Empresa',
  experience: 'X años de experiencia en...',
  approach: 'Mi enfoque profesional se basa en... Aquí describes tu filosofía de trabajo y lo que te apasiona de tu carrera.',
  values: [
    'Colaboración y trabajo en equipo',
    'Innovación y mejora continua',
    'Calidad y atención al detalle',
    'Comunicación efectiva'
  ],
  achievements: [
    'Logro profesional destacado 1',
    'Proyecto importante que lideraste',
    'Reconocimiento o certificación relevante'
  ]
});

// Intereses y gustos
export const interests = signal<Interest[]>([
  {
    category: 'Música',
    items: ['Rock', 'Jazz', 'Música Clásica', 'Indie'],
    description: 'La música es una parte fundamental de mi vida...'
  },
  {
    category: 'Deportes',
    items: ['Fútbol', 'Natación', 'Senderismo', 'Yoga'],
    description: 'Me gusta mantenerme activo/a y disfruto de...'
  },
  {
    category: 'Lectura',
    items: ['Novela histórica', 'Biografías', 'Ciencia ficción', 'Desarrollo personal'],
    description: 'Los libros me permiten explorar mundos diferentes...'
  },
  {
    category: 'Viajes',
    items: ['Europa', 'Asia', 'Montañas', 'Ciudades históricas'],
    description: 'Viajar me enseña sobre diferentes culturas y perspectivas...'
  }
]);

// Valores personales
export const values = signal<Value[]>([
  {
    title: 'Autenticidad',
    description: 'Creo en ser genuino/a y fiel a mis principios en todas las situaciones.',
    icon: 'check-circle'
  },
  {
    title: 'Crecimiento',
    description: 'La mejora continua y el aprendizaje constante son fundamentales para mí.',
    icon: 'trending-up'
  },
  {
    title: 'Empatía',
    description: 'Entender y conectar con los demás es esencial para construir relaciones significativas.',
    icon: 'heart'
  },
  {
    title: 'Equilibrio',
    description: 'Busco mantener un balance saludable entre el trabajo, la familia y el crecimiento personal.',
    icon: 'scale'
  }
]);

// Estilo de vida
export const lifestyleInfo = signal<LifestyleInfo>({
  routine: 'Mi día típico incluye... Describe tu rutina diaria, hábitos matutinos, horarios de trabajo, tiempo libre.',
  hobbies: [
    'Fotografía',
    'Cocinar',
    'Jardinería', 
    'Aprender idiomas',
    'Tocar un instrumento'
  ],
  favoriteThings: [
    'Un buen café por la mañana',
    'Atardeceres en la playa',
    'Conversaciones profundas',
    'Música en vivo',
    'Comida casera'
  ],
  philosophy: 'Mi filosofía de vida se centra en... Aquí puedes compartir tu perspectiva sobre la vida, lo que consideras importante, cómo te gusta vivir el día a día.'
});

// Información de contacto
export const contactInfo = signal<ContactInfo>({
  methods: {
    email: 'tu.email@example.com',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    phone: '+34 123 456 789'
  },
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/tu-perfil',
      username: '@tu-perfil',
      icon: 'linkedin'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/tu-usuario',
      username: '@tu-usuario',
      icon: 'twitter'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/tu-usuario',
      username: '@tu-usuario',
      icon: 'instagram'
    }
  ],
  availability: 'Disponible para nuevas oportunidades y colaboraciones',
  preferredContact: 'La mejor forma de contactarme es por email o LinkedIn'
});