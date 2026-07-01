<script setup lang="ts">
import type { ResumeContent } from '~/composables/useSiteContent'

const locale = 'en' as const

const { data: resume } = await useFetch<ResumeContent>(`/api/content/${locale}/resume`, {
  key: `resume-${locale}`
})

if (!resume.value) {
  throw createError({ statusCode: 404, statusMessage: 'Resume missing' })
}
</script>

<template>
  <div class="section-stack">
    <PageHero eyebrow="Resume" :title="resume.title" :subtitle="resume.summary">
      <a class="button-pill button-pill--primary" :href="resume.pdf" target="_blank" rel="noreferrer">
        Download PDF
      </a>
      <NuxtLink class="button-pill button-pill--ghost" to="/resume">
        切换到中文
      </NuxtLink>

      <template #aside>
        <div class="eyebrow">Profile</div>
        <h2 class="section-title" style="font-size: 30px;">JUNYU LU</h2>
        <p class="section-copy">{{ resume.subtitle }}</p>
        <div class="tag-list" style="margin-top: 18px;">
          <span v-for="tag in resume.profileTags" :key="tag" class="pill">{{ tag }}</span>
        </div>
      </template>
    </PageHero>

    <div class="resume-grid">
      <section class="soft-card content-box">
        <div class="eyebrow">Experience</div>
        <div v-for="item in resume.experiences" :key="item.title + item.period" class="timeline-item">
          <h3 class="list-item__title">{{ item.title }}</h3>
          <div class="muted">{{ item.period }}</div>
          <p class="section-copy">{{ item.summary }}</p>
        </div>
      </section>

      <section class="soft-card content-box">
        <div class="eyebrow">Skills</div>
        <div class="tag-list" style="margin-bottom: 16px;">
          <span v-for="skill in resume.skills" :key="skill" class="pill">{{ skill }}</span>
        </div>
        <p class="section-copy">Engineering and expression are treated as one design problem.</p>
      </section>

      <section class="soft-card content-box">
        <div class="eyebrow">Education</div>
        <div v-for="item in resume.education" :key="item.title + item.meta" class="timeline-item">
          <h3 class="list-item__title">{{ item.title }}</h3>
          <div class="muted">{{ item.meta }}</div>
          <p class="section-copy">{{ item.summary }}</p>
        </div>
      </section>

      <section class="soft-card content-box">
        <div class="eyebrow">Links</div>
        <div class="grid-list">
          <a
            v-for="link in resume.links"
            :key="link.href"
            class="list-item"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="list-item__title">{{ link.label }}</h3>
            <div class="muted">{{ link.href }}</div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
