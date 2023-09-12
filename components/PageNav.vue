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

const isMdScreen = useMediaQuery('(min-width: 864px)')
</script>

<template>
  <div>
    <div v-show="!isMdScreen" v-if="maxPage" fcc py-2>
      <NuxtLink v-if="page > 1" :to="`/${nav}/${page - 1}`" btn>
        <div i-carbon:arrow-left />
      </NuxtLink>
      <span v-else btn>
        <div i-carbon:arrow-left />
      </span>
      <span px-2>{{ page }} / {{ maxPage }}</span>
      <NuxtLink v-if="hasMore" :to="`/${nav}/${page + 1}`" btn>
        <div i-carbon:arrow-right />
      </NuxtLink>
      <span v-else btn>
        <div i-carbon:arrow-right />
      </span>
    </div>
    <div v-show="isMdScreen" class="fcc fixed right-[calc(calc(100vw-48rem)/2)] top-40 flex-col translate-x-14">
      <div class="pagination">
        <NuxtLink v-if="page > 1" :to="`/${nav}/${page - 1}`">
          <div i-carbon:caret-left class="arrow" />
        </NuxtLink>
        <div v-else text-gray>
          <div i-carbon:caret-left class="arrow" />
        </div>
      </div>
      <span w-14 text-center>{{ page }} / {{ maxPage > 99 ? '99+' : maxPage }}</span>
      <div class="pagination">
        <NuxtLink v-if="hasMore" :to="`/${nav}/${page + 1}`" inline-block>
          <div i-carbon:caret-right class="arrow" />
        </NuxtLink>
        <span v-else text-gray>
          <div i-carbon:caret-right class="arrow" />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  @apply fcc h-30 border bg-orange-50 dark:bg-zinc-900 w-14 text-center;
}
.arrow {
 @apply text-bold text-7;
}
</style>
