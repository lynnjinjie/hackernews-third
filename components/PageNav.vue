<script setup lang='ts'>
const props = defineProps<{
  nav: string
  page: number
  total: number
}>()
const maxPage = computed(() => Math.ceil(props.total / 20))
const hasMore = computed(() => props.page < maxPage.value)
</script>

<template>
  <div m-2>
    <NuxtLink pr-2 :to="`/${nav}/${page - 1}`">
      &lt; prev
    </NuxtLink>

    <NuxtLink v-if="hasMore" :to="`/${nav}/${page + 1}`">
      next&gt;
    </NuxtLink>
    <span v-else text-gray>next &gt;</span>
  </div>
</template>
