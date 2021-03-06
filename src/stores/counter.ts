import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)
  const doubleCount = computed(() => counter.value * 2)
  const increment = () => (counter.value++)

  return {
    counter,
    doubleCount,
    increment
  }
})
