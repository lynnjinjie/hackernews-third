<script setup lang='ts'>
const route = useRoute()
const id = computed(() => route.params.id)
const item = ref<any>({})
useHead({
  title: item.value?.title,
})
onMounted(() => {
  getData()
})
async function getData() {
  const data = await $fetch('/api/item', {
    query: {
      id: id.value,
      withComments: true,
    },
  })
  item.value = data
}
</script>

<template>
  <Loading v-if="isEmptyObject(item)" />
  <div v-else px-2 pb-4>
    <header>
      <a v-if="item?.url" :href="item.url" target="_blank" inline-block py-1 underline hover:decoration-dotted>
        <h2 text-2xl font-semibold>{{ item.title }}</h2>
      </a>
      <p pb-1 text-3 text-gray-400>
        <span pr-1>{{ item.points }} points by</span>
        <NuxtLink underline :to="`/user/${item.user}`">
          {{ item.user }}
        </NuxtLink>
        <span px-2>|</span>
        <span>{{ timeAgo(item.time) }}</span>
        <span px-2>|</span>
        <NuxtLink :to="`/item/${item.id}`" hover:underline>
          {{ item.comments_count }} commits
        </NuxtLink>
      </p>
    </header>
    <ul>
      <PostComment v-for="comment in item.comments" :key="comment.id" :comment="comment" />
    </ul>
  </div>
</template>
