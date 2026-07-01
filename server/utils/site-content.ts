import type {
  HomeContent,
  ProjectContent,
  ResumeContent,
  WritingContent
} from '~/composables/useSiteContent'
import type { SiteLocale } from '~/composables/useLocalePath'
import fg from 'fast-glob'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
})

const contentRoot = resolve(process.cwd(), 'content')

function parseMarkdownFile<T>(relativePath: string) {
  const fullPath = resolve(contentRoot, relativePath)
  const source = readFileSync(fullPath, 'utf-8')
  const parsed = matter(source)

  return {
    ...(parsed.data as T),
    path: `/${relativePath.replace(/\\/g, '/').replace(/\.md$/, '')}`,
    body: parsed.content.trim(),
    html: markdown.render(parsed.content)
  }
}

export async function fetchHome(locale: SiteLocale) {
  return parseMarkdownFile<HomeContent>(`${locale}/home.md`)
}

export async function fetchResume(locale: SiteLocale) {
  return parseMarkdownFile<ResumeContent>(`${locale}/resume.md`)
}

export async function fetchProjects(locale: SiteLocale) {
  return fg
    .sync(`${locale}/projects/*.md`, { cwd: contentRoot })
    .map(file => parseMarkdownFile<ProjectContent>(file))
    .sort((a, b) => b.year - a.year)
}

export async function fetchProjectBySlug(locale: SiteLocale, slug: string) {
  return parseMarkdownFile<ProjectContent>(`${locale}/projects/${slug}.md`)
}

export async function fetchWriting(locale: SiteLocale) {
  return fg
    .sync(`${locale}/writing/*.md`, { cwd: contentRoot })
    .map(file => parseMarkdownFile<WritingContent>(file))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function fetchWritingBySlug(locale: SiteLocale, slug: string) {
  return parseMarkdownFile<WritingContent>(`${locale}/writing/${slug}.md`)
}
