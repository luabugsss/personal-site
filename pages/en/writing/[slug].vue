<script setup lang="ts">
import type { WritingContent } from '~/composables/useSiteContent'

const route = useRoute()
const slug = (Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug) || ''

const { data: article } = await useFetch<WritingContent>(`/api/content/en/writing/${slug}`, {
  key: `writing-en-${slug}`
})

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}
</script>

<template>
  <article class="soft-card article-card">
    <div class="eyebrow">Writing</div>
    <h1>{{ article.title }}</h1>
    <div class="tag-list" style="margin-bottom: 18px;">
      <span class="pill">{{ article.date }}</span>
      <span v-for="tag in article.tags" :key="tag" class="pill">{{ tag }}</span>
    </div>
    <div v-html="article.html" />
  </article>
</template>
