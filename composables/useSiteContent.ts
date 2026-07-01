export interface BaseContent {
  path: string
  body: string
  html: string
}

export interface HomeContent extends BaseContent {
  name: string
  role: string
  intro: string
  heroTitle: string
  heroBody: string
  quickFacts: string[]
  currentFocus: Array<{ label: string; value: string }>
  aboutTitle: string
  aboutSummary: string
  traits: string[]
  socialLinks: Array<{ label: string; href: string }>
  ctaLinks: Array<{ label: string; href: string }>
}

export interface ResumeContent extends BaseContent {
  title: string
  subtitle: string
  summary: string
  pdf: string
  profileTags: string[]
  experiences: Array<{ title: string; period: string; summary: string }>
  skills: string[]
  education: Array<{ title: string; meta: string; summary: string }>
  links: Array<{ label: string; href: string }>
}

export interface ProjectContent extends BaseContent {
  title: string
  slug: string
  summary: string
  year: number
  stack: string[]
  featured: boolean
  status: string
  cover?: string
  links: Array<{ label: string; href: string }>
}

export interface WritingContent extends BaseContent {
  title: string
  slug: string
  summary: string
  date: string
  tags: string[]
  featured: boolean
}

export function pickFeatured<T extends { featured: boolean }>(items: T[], count = 2) {
  return items.filter(item => item.featured).slice(0, count)
}
