<script setup lang="ts">
import { toAlternateLocalePath } from '~/composables/useLocalePath'

const route = useRoute()

const isEnglish = computed(() => route.path === '/en' || route.path.startsWith('/en/'))
const locale = computed(() => (isEnglish.value ? 'en' : 'zh'))
const switchLabel = computed(() => (isEnglish.value ? '中文' : 'EN'))
const switchPath = computed(() => toAlternateLocalePath(route.path))

const links = computed(() => {
  if (locale.value === 'en') {
    return [
      { label: 'About', href: '/en' },
      { label: 'Resume', href: '/en/resume' },
      { label: 'Projects', href: '/en/projects' },
      { label: 'Writing', href: '/en/writing' }
    ]
  }

  return [
    { label: '关于', href: '/' },
    { label: '简历', href: '/resume' },
    { label: '项目', href: '/projects' },
    { label: '文章', href: '/writing' }
  ]
})

function isActive(path: string) {
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>

<template>
  <header class="site-topbar">
    <div class="container site-topbar__inner">
      <NuxtLink class="site-brand" :to="locale === 'en' ? '/en' : '/'">
        {{ locale === 'en' ? 'JUNYU LU' : '卢俊宇' }}
      </NuxtLink>

      <nav class="site-nav">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          :class="['site-nav__link', { 'site-nav__link--active': isActive(link.href) }]"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink class="site-nav__link" :to="switchPath">
          {{ switchLabel }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
