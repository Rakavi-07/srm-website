export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  month: string;
  day: string;
  venue: string;
}

export interface Program {
  id: number;
  name: string;
  department: string;
  duration: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface QuickLink {
  label: string;
  icon: string;
  href: string;
}
