import type { SiteLocale } from '~/composables/useLocalePath'
import { fetchResume } from '~/server/utils/site-content'
import { createError, getRouterParam } from 'h3'

function resolveLocale(locale: string | undefined): SiteLocale {
  if (locale === 'zh' || locale === 'en') {
    return locale
  }

  throw createError({ statusCode: 404, statusMessage: 'Locale not found' })
}

export default defineEventHandler(async (event) => {
  return fetchResume(resolveLocale(getRouterParam(event, 'locale')))
})
