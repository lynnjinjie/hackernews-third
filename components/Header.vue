<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
</script>

<template>
  <header sticky top-0 w-full border-b p-2 backdrop-blur-md>
    <nav mx-auto max-w-3xl flex items-center gap-3 text-base>
      <NuxtLink to="/" flex>
        <img src="/y18.svg" alt="Hacker News" mr-1>
        <h2 text-lg font-semibold font-mono>
          Hacker News
        </h2>
      </NuxtLink>
      <NuxtLink to="/newest/1">
        news
      </NuxtLink>
      <NuxtLink to="/ask/1">
        ask
      </NuxtLink>
      <NuxtLink to="/show/1">
        show
      </NuxtLink>
      <NuxtLink to="/jobs/1">
        jobs
      </NuxtLink>
      <NuxtLink to="/about">
        about
      </NuxtLink>
      <div flex-1 />
      <ToggleTheme />
    </nav>
  </header>
</template>
