<template>
  <div class="site-shell">
    <SiteHeader />
    <main class="page-frame">
      <div class="container">
        <div class="panel page-panel">
          <slot />
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
