import type { SiteLocale } from '~/composables/useLocalePath'
import { fetchProjectBySlug } from '~/server/utils/site-content'
import { createError, getRouterParam } from 'h3'

function resolveLocale(locale: string | undefined): SiteLocale {
  if (locale === 'zh' || locale === 'en') {
    return locale
  }

  throw createError({ statusCode: 404, statusMessage: 'Locale not found' })
}

export default defineEventHandler(async (event) => {
  const locale = resolveLocale(getRouterParam(event, 'locale'))
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
  }

  return fetchProjectBySlug(locale, slug)
})
