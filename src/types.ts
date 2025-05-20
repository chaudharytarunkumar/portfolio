export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillData {
  id: number;
  name: string;
  category: 'technical' | 'soft';
  level: number; // 0-100
  icon?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: 'certificate' | 'award' | 'event';
  date: string;
}

export interface MessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}