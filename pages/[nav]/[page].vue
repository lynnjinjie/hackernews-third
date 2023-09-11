<script setup lang="ts">
const route = useRoute()
const mainStore = useMainStore()
const page = computed(() => +route.params.page || 1)
const feed = computed(() => route.params.nav as string)
const data = ref<any>({})
onMounted(() => {
  getData()
})
async function getData() {
  const { data: originData } = await useFetch('/api/feeds', {
    query: {
      feed,
      page,
    },
  })
  data.value = originData.value
}
const list = computed(() => {
  if (data.value) {
    mainStore.setNewsTotal(data.value.total)
    return data.value.data
  }
  return null
})
const total = computed(() => {
  if (data.value)
    return data.value.total

  return 0
})
</script>

<template>
  <div>
    <ul>
      <PostItem v-for="item in list" :key="item.id" :item="item" />
    </ul>
    <PageNav :nav="feed" :page="page" :total="total" />
  </div>
</template>
