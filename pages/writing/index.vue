<script setup lang="ts">
import type { WritingContent } from '~/composables/useSiteContent'

const locale = 'zh' as const

const { data: writing } = await useFetch<WritingContent[]>(`/api/content/${locale}/writing`, {
  key: `writing-${locale}`
})

if (!writing.value) {
  throw createError({ statusCode: 404, statusMessage: 'Writing missing' })
}
</script>

<template>
  <div class="section-stack">
    <PageHero eyebrow="文章" title="技术笔记与阶段性思考" subtitle="文章模块保持轻量，但它是这个站点里很重要的表达层。">
      <NuxtLink class="button-pill button-pill--ghost" to="/">
        返回首页
      </NuxtLink>

      <template #aside>
        <div class="eyebrow">说明</div>
        <p class="section-copy">不做复杂博客系统，只保留足够稳定的列表页与 Markdown 详情页。</p>
      </template>
    </PageHero>

    <section class="soft-card content-box">
      <div class="grid-list">
        <WritingCard v-for="article in writing" :key="article.slug" :article="article" :locale="locale" />
      </div>
    </section>
  </div>
</template>
