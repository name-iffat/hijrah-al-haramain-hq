export interface Package {
  id: string;
  title: string;
  price: string;
  duration: string;
  type: 'Umrah' | 'Hajj' | 'Tour';
  features: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export enum PageRoute {
  HOME = '/',
  PACKAGES = '/packages',
  ABOUT = '/about',
  PROCESS = '/process',
  GALLERY = '/gallery',
  CONTACT = '/contact',
}