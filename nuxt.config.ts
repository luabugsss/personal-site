import { defineNuxtConfig } from 'nuxt/config'
import fg from 'fast-glob'

const dynamicRoutes = fg
  .sync([
    'content/zh/projects/*.md',
    'content/en/projects/*.md',
    'content/zh/writing/*.md',
    'content/en/writing/*.md'
  ], { cwd: process.cwd() })
  .map((file) => {
    const normalized = file.replace(/\\/g, '/').replace(/^content\//, '').replace(/\.md$/, '')

    if (normalized.startsWith('zh/')) {
      return `/${normalized.slice(3)}`
    }

    return `/${normalized}`
  })

export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  },
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/resume',
        '/projects',
        '/writing',
        '/en',
        '/en/resume',
        '/en/projects',
        '/en/writing',
        ...dynamicRoutes
      ]
    }
  },
  compatibilityDate: '2026-07-01'
})
