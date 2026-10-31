import content from './portfolioContent.json';

export interface SkillItem {
  name: string;
  icon?: string;
  color?: string;
  details?: string;
}

export interface SkillCategoryGroup {
  category: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  badge?: string;
  achievements: string[];
  skills?: string[];
  icon?: string;
  iconColor?: string;
  logo?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location?: string;
  score?: string;
  focus?: string;
  activities?: string;
  icon?: string;
  logo?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  year: string;
  badge: string;
  category: string;
  description: string;
  icon?: string;
  iconColor?: string;
  logo?: string;
}

export interface MediaLink {
  title: string;
  url: string;
  icon?: string;
}

export interface MediaCategory {
  category: string;
  period: string;
  leadParagraph: string;
  links: MediaLink[];
}

export interface DocumentaryPhoto {
  src: string;
  alt: string;
  caption: string;
  category: "Pemberdayaan" | "Prestasi dan Riset" | "Lapangan dan Teknis" | string;
  tag: string;
  source?: string;
}

export const personalInfo = content.personalInfo;
export const heroData = content.heroData;
export const aboutData = content.aboutData;
export const programsShowcaseData = content.programsShowcaseData;
export const skillsCategories: SkillCategoryGroup[] = content.skillsCategories as SkillCategoryGroup[];
export const experienceProgramAndWork: ExperienceItem[] = content.experienceProgramAndWork as ExperienceItem[];
export const experienceOrganization: ExperienceItem[] = content.experienceOrganization as ExperienceItem[];
export const educationData: EducationItem[] = content.educationData as EducationItem[];
export const achievementsData: AchievementItem[] = content.achievementsData as AchievementItem[];
export const mediaData: MediaCategory[] = content.mediaData as MediaCategory[];
export const documentaryPhotos: DocumentaryPhoto[] = content.documentaryPhotos as DocumentaryPhoto[];
export const galleryEmbeds: string[] = content.galleryEmbeds as string[];
export const heroPhotos: { src: string; alt: string }[] = (content as any).heroPhotos || [];
export const rawPortfolioContent = content;
