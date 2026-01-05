import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}