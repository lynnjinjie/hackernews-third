<script setup lang="ts">
useSeoMeta({
  titleTemplate: (content) => {
    return content === 'news' ? 'Hacker News' : `${content} | Hacker News`
  },
  description: 'A Hacker News clone Site',
})

useHead({
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body, #_nuxt {
  @apply h-screen;
}
html.dark {
  @apply bg-zinc-900 text-zinc-300;
}
</style>
