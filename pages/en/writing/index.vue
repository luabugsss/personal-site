<script setup lang="ts">
import type { WritingContent } from '~/composables/useSiteContent'

const locale = 'en' as const

const { data: writing } = await useFetch<WritingContent[]>(`/api/content/${locale}/writing`, {
  key: `writing-${locale}`
})

if (!writing.value) {
  throw createError({ statusCode: 404, statusMessage: 'Writing missing' })
}
</script>

<template>
  <div class="section-stack">
    <PageHero eyebrow="Writing" title="Technical notes and reflective writing" subtitle="Writing stays intentionally lightweight, but it is still a core part of the personal narrative.">
      <NuxtLink class="button-pill button-pill--ghost" to="/en">
        Back home
      </NuxtLink>

      <template #aside>
        <div class="eyebrow">Notes</div>
        <p class="section-copy">No full blog platform. Just a stable list page and Markdown detail pages that support the story.</p>
      </template>
    </PageHero>

    <section class="soft-card content-box">
      <div class="grid-list">
        <WritingCard v-for="article in writing" :key="article.slug" :article="article" :locale="locale" />
      </div>
    </section>
  </div>
</template>
