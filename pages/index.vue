<script setup>
definePageMeta({
  middleware: (from) => {
    if (from.path === '/')
      return navigateTo('/news/1')
  },
})
</script>

<template>
  <div>
    Home
  </div>
</template>
