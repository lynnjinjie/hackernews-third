<script setup lang="ts">
useSeoMeta({
  titleTemplate: (content) => {
    return content ? `${content} | Hacker News ` : 'Hacker News'
  },
  description: 'A Hacker News clone Site',
})

useHead({
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'hacknews' },
    { property: 'og:description', content: 'A hacknews third Site' },
    { property: 'og:image', content: '/favicon.ico' },
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
