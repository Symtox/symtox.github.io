import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type Theme = {
  name: string;
  '--primary': `#${string}`
  '--secondary': `#${string}`
  '--tertiary': `#${string}`
  '--light': `#${string}`
  '--dark': `#${string}`
}

export const useThemeStore = defineStore('theme-store', () => {
  const themeIndex = ref(0)
  const isThemeMenuOpen = ref(false);

  const themes: Theme[] = [{
    name: 'Mon theme de base',
    '--primary': '#ae4561',
    '--secondary': '#04471C',
    '--tertiary': '#ae4561',
    '--light': '#FFEE88',
    '--dark': '#020202'
  }, {
    name: 'Un theme random',
    '--primary': '#640D14',
    '--secondary': '#FDCA40',
    '--tertiary': '#D95D39',
    '--light': '#202C59',
    '--dark': '#ae4561'
  }, {
    name: 'Le bon theme',
    '--primary': '#06C6B9',
    '--secondary': '#EB6F99',
    '--tertiary': '#FDF0D5',
    '--light': '#EBFEFE',
    '--dark': '#331832'
  }]

  const selectTheme = (index: number) => {
    themeIndex.value = index
    const bodyEl = document.querySelector('body')
    if (bodyEl) {
      Object.entries(themes[index]).forEach(([key, value]) => {
          bodyEl.style.setProperty(key, value)
      })
    }
  }

  const currentTheme = computed(() => themes[themeIndex.value])

  return { themes, currentTheme, themeIndex, isThemeMenuOpen, selectTheme }
})