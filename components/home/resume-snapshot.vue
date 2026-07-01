<script setup lang="ts">
import type { ResumeContent } from '~/composables/useSiteContent'
import type { SiteLocale } from '~/composables/useLocalePath'

defineProps<{
  locale: SiteLocale
  resume: ResumeContent
}>()
</script>

<template>
  <section class="soft-card content-box">
    <div class="eyebrow">Resume Snapshot</div>
    <div class="list-item__row" style="margin-bottom: 16px;">
      <h2 class="section-title">{{ locale === 'en' ? 'Resume Snapshot' : '简版履历' }}</h2>
      <a :href="resume.pdf" target="_blank" rel="noreferrer" class="muted">PDF Download</a>
    </div>
    <div class="list-item">
      <div class="list-item__row">
        <h3 class="list-item__title">{{ resume.title }}</h3>
        <span class="muted">{{ locale === 'en' ? 'Profile' : '概要' }}</span>
      </div>
      <p class="list-item__copy">{{ resume.subtitle }}</p>
      <div class="tag-list">
        <span v-for="tag in resume.profileTags" :key="tag" class="pill">{{ tag }}</span>
      </div>
    </div>
  </section>
</template>
