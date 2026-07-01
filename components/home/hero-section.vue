<script setup lang="ts">
import type { HomeContent } from '~/composables/useSiteContent'

defineProps<{
  content: HomeContent
}>()
</script>

<template>
  <section class="hero-grid">
    <div class="soft-card hero-profile">
      <div class="hero-avatar">◔</div>
      <div class="eyebrow">{{ content.role }}</div>
      <h2 class="hero-name">{{ content.name }}</h2>
      <p>{{ content.intro }}</p>
      <div class="tag-list" style="margin-top: 18px;">
        <span v-for="fact in content.quickFacts" :key="fact" class="pill">
          {{ fact }}
        </span>
      </div>
    </div>

    <div class="soft-card hero-copy">
      <div class="eyebrow">Personal Profile</div>
      <h1>{{ content.heroTitle }}</h1>
      <p>{{ content.heroBody }}</p>
      <div class="hero-actions">
        <NuxtLink
          v-for="(link, index) in content.ctaLinks"
          :key="link.href"
          class="button-pill"
          :class="index === 0 ? 'button-pill--primary' : 'button-pill--ghost'"
          :to="link.href"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
      <div class="focus-strip">
        <div v-for="item in content.currentFocus" :key="item.label" class="focus-strip__item soft-card">
          <div class="eyebrow">{{ item.label }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
