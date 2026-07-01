<script setup lang="ts">
import type { HomeContent } from '~/composables/useSiteContent'

defineProps<{
  content: HomeContent
}>()
</script>

<template>
  <section class="soft-card content-box">
    <div class="eyebrow">Current Focus</div>
    <div class="focus-strip" style="margin-top: 12px;">
      <div v-for="item in content.currentFocus" :key="item.label" class="focus-strip__item soft-card">
        <div class="eyebrow">{{ item.label }}</div>
        <div>{{ item.value }}</div>
      </div>
    </div>
  </section>
</template>
