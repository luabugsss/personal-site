<script setup lang="ts">
import type { ProjectContent } from '~/composables/useSiteContent'
import type { SiteLocale } from '~/composables/useLocalePath'

defineProps<{
  locale: SiteLocale
  projects: ProjectContent[]
}>()
</script>

<template>
  <section class="soft-card content-box">
    <div class="eyebrow">Selected Work</div>
    <div class="list-item__row" style="margin-bottom: 16px;">
      <h2 class="section-title">{{ locale === 'en' ? 'Selected Projects' : '精选项目' }}</h2>
      <NuxtLink :to="useLocalePath(locale, '/projects')" class="muted">
        {{ locale === 'en' ? 'View all' : '查看全部' }}
      </NuxtLink>
    </div>
    <div class="grid-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
        :locale="locale"
      />
    </div>
  </section>
</template>
