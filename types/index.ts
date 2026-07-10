export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
