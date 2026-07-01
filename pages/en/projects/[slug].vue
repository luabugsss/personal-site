<script setup lang="ts">
import type { ProjectContent } from '~/composables/useSiteContent'

const route = useRoute()
const slug = (Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug) || ''

const { data: project } = await useFetch<ProjectContent>(`/api/content/en/projects/${slug}`, {
  key: `project-en-${slug}`
})

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
</script>

<template>
  <div class="content-layout">
    <aside class="sidebar">
      <div class="sidebar__block">
        <div class="eyebrow">Project</div>
        <h1 class="section-title" style="font-size: 30px;">{{ project.title }}</h1>
        <p class="section-copy">{{ project.summary }}</p>
      </div>

      <div class="sidebar__block">
        <div class="eyebrow">Stack</div>
        <div class="tag-list" style="margin-top: 12px;">
          <span v-for="tag in project.stack" :key="tag" class="pill">{{ tag }}</span>
        </div>
      </div>

      <div v-if="project.links?.length" class="sidebar__block">
        <div class="eyebrow">Links</div>
        <div class="grid-list" style="margin-top: 12px;">
          <a
            v-for="link in project.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="button-pill button-pill--ghost"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </aside>

    <article class="soft-card article-card">
      <div class="eyebrow">Case Study</div>
      <h1>{{ project.title }}</h1>
      <div v-html="project.html" />
    </article>
  </div>
</template>
