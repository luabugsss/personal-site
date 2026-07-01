<script setup lang="ts">
import type { HomeContent } from '~/composables/useSiteContent'

defineProps<{
  content: HomeContent
}>()
</script>

<template>
  <section class="soft-card content-box">
    <div class="eyebrow">Contact</div>
    <h2 class="section-title">Let’s Connect</h2>
    <p class="section-copy">
      {{ content.socialLinks.length > 0 ? 'GitHub、邮箱与社交链接都放在这里，保持轻量直接。' : '' }}
    </p>
    <div class="tag-list" style="margin-top: 18px;">
      <a
        v-for="link in content.socialLinks"
        :key="link.href"
        class="button-pill button-pill--ghost"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
      >
        {{ link.label }}
      </a>
    </div>
  </section>
</template>
