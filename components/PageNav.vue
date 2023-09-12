<script setup lang='ts'>
interface Props {
  nav: string
  page: number
  total: number
}
const props = withDefaults(defineProps<Props>(), {
  nav: 'news',
  page: 1,
  total: 1,
})
const maxPage = computed(() => Math.ceil(props.total / 20))
const hasMore = computed(() => props.page < maxPage.value)
</script>

<template>
  <div v-if="maxPage" m-2>
    <NuxtLink v-if="page > 1" :to="`/${nav}/${page - 1}`">
      &lt; prev
    </NuxtLink>
    <span v-else text-gray>&lt; prev</span>
    <span px-2>{{ page }} / {{ maxPage }}</span>
    <NuxtLink v-if="hasMore" :to="`/${nav}/${page + 1}`">
      next&gt;
    </NuxtLink>
    <span v-else text-gray>next &gt;</span>
  </div>
</template>
