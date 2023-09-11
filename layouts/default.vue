<script setup lang='ts'>
defineOptions({
  name: 'Default'
})
const props = defineProps<{
  value?: boolean
}>()
</script>

<template>
  <div>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <slot />
  </div>
</template>
