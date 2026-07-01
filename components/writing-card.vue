<script setup lang="ts">
import type { WritingContent } from '~/composables/useSiteContent'
import type { SiteLocale } from '~/composables/useLocalePath'

const props = defineProps<{
  article: WritingContent
  locale: SiteLocale
}>()

const detailPath = computed(() => useLocalePath(props.locale, `/writing/${props.article.slug}`))
</script>

<template>
  <NuxtLink class="list-item" :to="detailPath">
    <div class="list-item__row">
      <h3 class="list-item__title">{{ article.title }}</h3>
      <span class="muted">{{ article.date }}</span>
    </div>
    <p class="list-item__copy">{{ article.summary }}</p>
    <div class="tag-list">
      <span v-for="tag in article.tags" :key="tag" class="pill">{{ tag }}</span>
    </div>
  </NuxtLink>
</template>
