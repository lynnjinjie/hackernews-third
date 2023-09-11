import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const newsTotal = ref<number>(0)

  function setNewsTotal(num: number) {
    newsTotal.value = num
  }

  return {
    newsTotal,
    setNewsTotal,
  }
})
