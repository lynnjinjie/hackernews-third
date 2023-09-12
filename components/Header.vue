<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
const navList = [
  { title: 'newest', to: '/newest/1' },
  { title: 'ask', to: '/ask/1' },
  { title: 'show', to: '/show/1' },
  { title: 'jobs', to: '/jobs/1' },
  { title: 'about', to: '/about' },
]
const route = useRoute()
</script>

<template>
  <header sticky top-0 w-full border-b p-2 backdrop-blur-md>
    <nav mx-auto max-w-3xl flex items-center gap-3 text-base>
      <NuxtLink to="/" flex :class="{ 'text-[#ff6600]': $route.path.startsWith('/news') }">
        <img src="/y18.svg" alt="Hacker News" mr-1>
        <h2 text-lg font-semibold font-mono>
          Hacker News
        </h2>
      </NuxtLink>
      <NuxtLink
        v-for="nav in navList"
        :key="nav.title"
        :to="nav.to"
        :class="{ 'text-[#ff6600]': $route.path.startsWith(`/${nav.title}`) }"
      >
        {{ nav.title }}
      </NuxtLink>
      <div flex-1 />
      <ToggleTheme />
    </nav>
  </header>
</template>
