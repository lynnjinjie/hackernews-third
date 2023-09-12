<script setup lang='ts'>
const navList = [
  { title: 'newest', to: '/newest/1' },
  { title: 'ask', to: '/ask/1' },
  { title: 'show', to: '/show/1' },
  { title: 'jobs', to: '/jobs/1' },
  { title: 'about', to: '/about' },
]
const isMdScreen = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <header sticky top-0 z-20 w-full border-b py-1 backdrop-blur-md>
    <nav mx-auto max-w-3xl flex items-center gap-3 px-1 text-base>
      <NuxtLink to="/" flex :class="{ 'text-[#ff6600]': $route.path.startsWith('/news') }">
        <img src="/y18.svg" alt="Hacker News" mr-1>
        <h2 v-show="isMdScreen" text-lg font-semibold font-mono>
          Hacker News
        </h2>
        <h2 v-show="!isMdScreen" text-lg font-semibold font-mono>
          HNews
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
