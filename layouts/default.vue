<script setup lang='ts'>
defineOptions({
  name: 'Default',
})
const props = defineProps<{
  value?: boolean
}>()
</script>

<template>
  <div>
    <Header />
    <main mx-auto max-w-3xl>
      <slot />
    </main>
  </div>
</template>
