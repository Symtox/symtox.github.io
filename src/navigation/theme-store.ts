import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type Theme = {
  name: string,
  className: string,
}

export const useThemeStore = defineStore('theme-store', () => {
  const selectedThemeIndex = ref(0)
  const isThemeMenuOpen = ref(false);
  const showThemeControl = ref(false);
  const themes: Theme[] = [{
    name: 'default',
    className: 'default'
  }, {
    name: 'dark',
    className: 'dark'
  }, {
    name: 'light',
    className: 'light'
  }]

  const selectTheme = (index: number) => {
    selectedThemeIndex.value = index
    const bodyEl = document.querySelector('body')
    if (bodyEl) {
      themes.forEach((theme, i) => {
        if (i === index) {
          bodyEl.classList.add(theme.className)
        } else {
          bodyEl.classList.remove(theme.className)
        }
      })
    }
  }

  const currentTheme = computed(() => themes[selectedThemeIndex.value])

  return { themes, currentTheme, selectedThemeIndex, isThemeMenuOpen, selectTheme, showThemeControl }
})