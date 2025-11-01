export interface NavigationItem {
  label: string;
  anchor: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  profileImage: string;
  aboutImage: string;
  aboutme: string;
  email: string;
  phone?: string;
  location: string;
}

export interface ProfessionalInfo {
  currentRole: string;
  company: string;
  experience: string;
  approach: string;
  values: string[];
  achievements?: string[];
}

export interface Interest {
  category: string;
  items: string[];
  description?: string;
  image?: string;
}

export interface Value {
  title: string;
  description: string;
  icon?: string;
}

export interface LifestyleInfo {
  routine: string;
  hobbies: string[];
  favoriteThings: string[];
  philosophy: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface ContactInfo {
  methods: {
    email: string;
    linkedin?: string;
    phone?: string;
  };
  socialLinks: SocialLink[];
  availability: string;
  preferredContact: string;
}