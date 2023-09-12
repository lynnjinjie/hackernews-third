<script setup lang='ts'>
defineOptions({
  name: 'About',
})
useHead({
  title: 'About',
})
</script>

<template>
  <div font-mono>
    <div>
      a <a href="https://news.ycombinator.com/" target="_blank">Hacker News</a> clone
    </div>
    <div>
      <a href="https://github.com/HackerNews/API" target="_blank">USE API</a>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply underline;
}
</style>
