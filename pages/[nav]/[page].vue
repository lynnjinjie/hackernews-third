<script setup lang="ts">
const route = useRoute()
const page = computed(() => +route.params.page || 1)
const feed = computed(() => route.params.nav as string)
useHead({
  title: feed.value,
})
const listData = ref<any>({})
async function getData() {
  const data = await $fetch('/api/feeds', {
    query: {
      feed: feed.value,
      page: page.value,
    },
  })
  listData.value = data
}
const list = computed(() => {
  if (listData.value)
    return listData.value.data || []

  return []
})
const total = computed(() => {
  if (listData.value)
    return listData.value.total || 0

  return 0
})
onMounted(() => getData())
</script>

<template>
  <div>
    <Loading v-if="!list.length" />
    <ul v-else>
      <PostItem v-for="item in list" :key="item.id" :item="item" />
    </ul>
    <PageNav :nav="feed" :page="page" :total="total" />
  </div>
</template>
