export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  iconName: 'hardhat' | 'file-text' | 'users';
  topics: string[];
  fullExplanation: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
  source: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AuthorityPost {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  content: string[];
  mediaKey: string;
  date: string;
}

export interface MediaItemConfig {
  key: string;
  label: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  desktopObjectPosition: string; // e.g. "center 30%" or "center center"
  mobileObjectPosition: string;  // e.g. "center top"
}
