<script setup lang='ts'>
const route = useRoute()

const id = computed(() => route.params.id)
const { data } = await useFetch('/api/user', { query: { id: id.value } })
const userInfo = computed(() => {
  const about = data.value?.about
  if (about) {
    const link = str2Link(about)
    return {
      ...data.value,
      about: link,
    }
  }
  return data.value
})
</script>

<template>
  <div pt-2>
    <h1 text-xl font-semibold>
      User: {{ userInfo.id }}
    </h1>
    <p>created: {{ dateFormat(userInfo.created_time, 'YYYY-MM-DD') }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <div v-if="userInfo.about" class="userAbout" py-2 v-html="userInfo.about" />
  </div>
</template>

<style>
.userAbout a {
  @apply  h-link;
}
</style>
