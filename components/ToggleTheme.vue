<script setup lang='ts'>
const colorMode = useColorMode()

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button @click="toggleDark">
    <div i-carbon-sun dark:i-carbon-moon />
  </button>
</template>
