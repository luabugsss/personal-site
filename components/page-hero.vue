<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="page-hero">
    <div class="soft-card page-hero__main">
      <div class="eyebrow">{{ eyebrow }}</div>
      <h1 class="section-title">{{ title }}</h1>
      <p class="section-copy">{{ subtitle }}</p>
      <div class="hero-actions">
        <slot />
      </div>
    </div>
    <div class="soft-card page-hero__aside">
      <slot name="aside" />
    </div>
  </section>
</template>
