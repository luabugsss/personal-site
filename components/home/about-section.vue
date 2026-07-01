<script setup lang="ts">
import type { HomeContent } from '~/composables/useSiteContent'

defineProps<{
  content: HomeContent
}>()
</script>

<template>
  <section class="soft-card content-box">
    <div class="eyebrow">About</div>
    <h2 class="section-title">{{ content.aboutTitle }}</h2>
    <p class="section-copy">{{ content.aboutSummary }}</p>
    <div class="tag-list" style="margin-top: 18px;">
      <span v-for="trait in content.traits" :key="trait" class="pill">{{ trait }}</span>
    </div>
  </section>
</template>
