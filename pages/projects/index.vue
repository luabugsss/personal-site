<script setup lang="ts">
import type { ProjectContent } from '~/composables/useSiteContent'

const locale = 'zh' as const

const { data: projects } = await useFetch<ProjectContent[]>(`/api/content/${locale}/projects`, {
  key: `projects-${locale}`
})

if (!projects.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projects missing' })
}
</script>

<template>
  <div class="section-stack">
    <PageHero eyebrow="项目" title="精选案例与完整项目列表" subtitle="项目是能力的证据，但每个案例都应该讲清问题、方法和结果。">
      <NuxtLink class="button-pill button-pill--ghost" to="/">
        返回首页
      </NuxtLink>

      <template #aside>
        <div class="eyebrow">概览</div>
        <p class="section-copy">首页只放精选项目，这里承接完整列表，并为静态生成提供详情页入口。</p>
      </template>
    </PageHero>

    <section class="soft-card content-box">
      <div class="grid-list">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" :locale="locale" />
      </div>
    </section>
  </div>
</template>
