<script setup lang="ts">
import type { ProjectContent } from '~/composables/useSiteContent'

const locale = 'en' as const

const { data: projects } = await useFetch<ProjectContent[]>(`/api/content/${locale}/projects`, {
  key: `projects-${locale}`
})

if (!projects.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projects missing' })
}
</script>

<template>
  <div class="section-stack">
    <PageHero eyebrow="Projects" title="Selected case studies and complete project list" subtitle="Projects support the story of who you are, but each case still needs a clear problem, approach, and outcome.">
      <NuxtLink class="button-pill button-pill--ghost" to="/en">
        Back home
      </NuxtLink>

      <template #aside>
        <div class="eyebrow">Overview</div>
        <p class="section-copy">The homepage stays selective. This page expands into the complete list and feeds prerendered detail routes.</p>
      </template>
    </PageHero>

    <section class="soft-card content-box">
      <div class="grid-list">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" :locale="locale" />
      </div>
    </section>
  </div>
</template>
