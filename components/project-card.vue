<script setup lang="ts">
import type { ProjectContent } from '~/composables/useSiteContent'
import type { SiteLocale } from '~/composables/useLocalePath'

const props = defineProps<{
  project: ProjectContent
  locale: SiteLocale
}>()

const detailPath = computed(() => useLocalePath(props.locale, `/projects/${props.project.slug}`))
</script>

<template>
  <NuxtLink class="list-item" :to="detailPath">
    <div class="list-item__row">
      <h3 class="list-item__title">{{ project.title }}</h3>
      <span class="muted">{{ project.year }}</span>
    </div>
    <p class="list-item__copy">{{ project.summary }}</p>
    <div class="tag-list">
      <span v-for="tag in project.stack" :key="tag" class="pill">{{ tag }}</span>
    </div>
  </NuxtLink>
</template>
