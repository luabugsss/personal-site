import type { SiteLocale } from '~/composables/useLocalePath'
import { fetchHome, fetchProjects, fetchResume, fetchWriting } from '~/server/utils/site-content'
import { createError, getRouterParam } from 'h3'

function resolveLocale(locale: string | undefined): SiteLocale {
  if (locale === 'zh' || locale === 'en') {
    return locale
  }

  throw createError({ statusCode: 404, statusMessage: 'Locale not found' })
}

export default defineEventHandler(async (event) => {
  const locale = resolveLocale(getRouterParam(event, 'locale'))
  const [home, resume, projects, writing] = await Promise.all([
    fetchHome(locale),
    fetchResume(locale),
    fetchProjects(locale),
    fetchWriting(locale)
  ])

  return { home, resume, projects, writing }
})
