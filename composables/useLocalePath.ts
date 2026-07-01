export type SiteLocale = 'zh' | 'en'

export function useLocalePath(locale: SiteLocale, path: string) {
  if (locale === 'en') {
    return path === '/' ? '/en' : `/en${path}`
  }

  return path
}

export function toAlternateLocalePath(currentPath: string) {
  if (currentPath === '/en') {
    return '/'
  }

  if (currentPath.startsWith('/en/')) {
    return currentPath.slice(3)
  }

  return currentPath === '/' ? '/en' : `/en${currentPath}`
}
