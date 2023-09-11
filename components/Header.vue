<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
</script>

<template>
  <header w-full bg-red-200>
    <nav mx-auto max-w-3xl>
      <NuxtLink to="/">
        news
      </NuxtLink>
    </nav>
  </header>
</template>
