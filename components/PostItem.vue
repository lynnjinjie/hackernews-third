<script setup lang='ts'>
import { timeAgo } from '~/utils'

defineProps<{
  item: any
}>()
</script>

<template>
  <li py-2>
    <a :href="item.url" target="_blank" inline-block underline hover:decoration-dotted>
      <h3 font-semibold>{{ item.title }}</h3>
    </a>
    <p text-3 text-gray-400>
      <span pr-1>{{ item.points }} points by</span>
      <NuxtLink underline :to="`/user/${item.user}`">
        {{ item.user }}
      </NuxtLink>
      <span px-2>|</span>
      <span>{{ timeAgo(item.time) }}</span>
      <span px-2>|</span>
      <NuxtLink :to="`/item/${item.id}`" underline>
        {{ item.comments_count }} commits
      </NuxtLink>
    </p>
  </li>
</template>
