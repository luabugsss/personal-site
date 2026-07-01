<script setup lang="ts">
import type {
  HomeContent,
  ProjectContent,
  ResumeContent,
  WritingContent
} from '~/composables/useSiteContent'

type HomePageData = {
  home: HomeContent
  resume: ResumeContent
  projects: ProjectContent[]
  writing: WritingContent[]
}

const locale = 'en' as const

const { data } = await useFetch<HomePageData>(`/api/content/${locale}/home-page`, {
  key: `home-${locale}`
})

if (!data.value?.home || !data.value?.resume || !data.value?.projects || !data.value?.writing) {
  throw createError({ statusCode: 404, statusMessage: 'Content missing' })
}

const { home, resume, projects, writing } = data.value
const featuredProjects = pickFeatured(projects, 2)
const featuredWriting = pickFeatured(writing, 2)
</script>

<template>
  <div class="page-home">
    <HomeHeroSection :content="home" />
    <div class="two-col">
      <HomeAboutSection :content="home" />
      <HomeResumeSnapshot :locale="locale" :resume="resume" />
    </div>
    <div class="two-col">
      <HomeFeaturedProjects :locale="locale" :projects="featuredProjects" />
      <HomeFeaturedWriting :locale="locale" :writing="featuredWriting" />
    </div>
    <HomeContactSection :content="home" />
  </div>
</template>
