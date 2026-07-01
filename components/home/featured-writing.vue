<script setup lang="ts">
import type { SiteLocale } from '~/composables/useLocalePath'
import type { WritingContent } from '~/composables/useSiteContent'

defineProps<{
  locale: SiteLocale
  writing: WritingContent[]
}>()
</script>

<template>
  <section class="soft-card content-box">
    <div class="eyebrow">Writing</div>
    <div class="list-item__row" style="margin-bottom: 16px;">
      <h2 class="section-title">{{ locale === 'en' ? 'Recent Writing' : '最近在写' }}</h2>
      <NuxtLink :to="useLocalePath(locale, '/writing')" class="muted">
        {{ locale === 'en' ? 'View all' : '查看全部' }}
      </NuxtLink>
    </div>
    <div class="grid-list">
      <WritingCard
        v-for="article in writing"
        :key="article.slug"
        :article="article"
        :locale="locale"
      />
    </div>
  </section>
</template>
