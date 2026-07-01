<script setup lang="ts">
const route = useRoute()
const isEnglish = computed(() => route.path === '/en' || route.path.startsWith('/en/'))
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="panel">
        <div class="site-footer__inner">
          <div class="muted">
            {{ isEnglish ? 'Built as a calm, content-first personal site.' : '一个克制、内容优先的个人站点。' }}
          </div>
          <div class="site-footer__links">
            <a href="https://github.com/luabugsss" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:1149036090@qq.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
