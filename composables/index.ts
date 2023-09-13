import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const pageLimit = useLocalStorage('pageLimit', 20)

  function setPageLimit(num: number) {
    pageLimit.value = num
  }

  return {
    pageLimit,
    setPageLimit,
  }
})
