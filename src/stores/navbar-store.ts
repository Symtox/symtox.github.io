import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', () => {
  const state = ref(false)

  return { state }
})
