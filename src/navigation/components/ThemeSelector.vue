<template>
  <aside class="theme-menu" :aria-expanded="isThemeMenuOpen">
    <h2>Themes</h2>
    <div class="theme-option-wrapper">
      <theme-selector-item v-for="(theme, index) in themeStore.themes"
                           :key="index"
                           :active="index === selectedThemeIndex"
                           :theme="theme"
                           @theme-selected="themeStore.selectTheme(index)" />

    </div>
  </aside>
  <button @click="isThemeMenuOpen = !isThemeMenuOpen" class="theme-control">
    <svg width="32px" height="32px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="12" r="2" />
      <circle cx="16" cy="9" r="2" />
      <circle cx="22" cy="12" r="2" />
      <circle cx="23" cy="18" r="2" />
      <circle cx="19" cy="23" r="2" />
      <path
        d="M16.54,2A14,14,0,0,0,2,16a4.82,4.82,0,0,0,6.09,4.65l1.12-.31A3,3,0,0,1,13,23.24V27a3,3,0,0,0,3,3A14,14,0,0,0,30,15.46,14.05,14.05,0,0,0,16.54,2Zm8.11,22.31A11.93,11.93,0,0,1,16,28a1,1,0,0,1-1-1V23.24a5,5,0,0,0-5-5,5.07,5.07,0,0,0-1.33.18l-1.12.31A2.82,2.82,0,0,1,4,16,12,12,0,0,1,16.47,4,12.18,12.18,0,0,1,28,15.53,11.89,11.89,0,0,1,24.65,24.32Z" />
      <rect class="cls-1" width="32" height="32" />
    </svg>
  </button>

</template>

<script setup lang="ts">
import ThemeSelectorItem from '@/navigation/components/ThemeSelectorItem.vue'
import { useThemeStore } from '@/navigation/theme-store'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isThemeMenuOpen, selectedThemeIndex } = storeToRefs(themeStore)
</script>

<style scoped>
svg {
  fill: var(--primary)
}

.cls-1 {
  fill: none;
}

@starting-style {
  .theme-control {
    transform: translateX(100%);
  }
}

.theme-control {
  padding: 10px 10px 10px 10px;
  background: var(--light);
  position: fixed;
  border-radius: 50% 0 0 50%;
  top: 25%;
  right: anchor(--anchor-name left);
  transition: transform .5s;
}

.theme-control:is(:hover, :focus) {
  transform: scale(1.1);
  animation-name: left-right;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear(0, 0.003 0.3%, 0.013 0.6%, 0.029 0.9%, 0.05 1.2%, 0.077 1.5%, 0.108 1.8%, 0.199 2.5%, 0.291 3.1%, 0.395 3.7%, 0.806 5.9%, 0.948 6.7%, 1.092 7.6%, 1.201 8.4%, 1.248 8.8%, 1.289 9.2%, 1.324 9.6%, 1.354 10%, 1.378 10.4%, 1.396 10.8%, 1.409 11.2%, 1.416 11.6%, 1.418 11.9%, 1.418 12.2%, 1.414 12.5%, 1.405 12.9%, 1.396 13.2%, 1.38 13.6%, 1.345 14.3%, 1.307 14.9%, 1.258 15.6%, 1.078 17.9%, 1.012 18.8%, 0.953 19.7%, 0.909 20.5%, 0.874 21.3%, 0.851 22%, 0.841 22.4%, 0.833 22.8%, 0.828 23.2%, 0.826 23.6%, 0.825 24.2%, 0.83 24.8%, 0.84 25.5%, 0.854 26.2%, 0.87 26.8%, 0.89 27.5%, 0.969 29.9%, 0.996 30.8%, 1.021 31.7%, 1.039 32.5%, 1.054 33.3%, 1.063 34%, 1.069 34.7%, 1.073 35.5%, 1.073 36.1%, 1.071 36.8%, 1.061 38.2%, 1.045 39.5%, 1.002 42.7%, 0.984 44.4%, 0.974 45.9%, 0.97 47.4%, 0.97 48.6%, 0.973 49.8%, 1.004 55.8%, 1.01 57.5%, 1.013 59.2%, 1.011 61.7%, 0.998 67.7%, 0.995 71%, 0.995 73.6%, 1.002 82.8%, 0.999 93.7%, 1)
}

@keyframes left-right {
  50% {
    padding-right: 15px;
  }
}


.theme-menu {
  --width: 220px;
  width: var(--width);
  border-radius: 8px 0 0 8px;

  padding: 50px 20px;

  background: green;
  position: fixed;
  right: calc(-1 * (var(--width) + 10px));
  overflow: hidden;

  inset-block: 0;
  transition-timing-function: cubic-bezier(0.401, 0.057, 0.693, 0.556);
  transition-property: right;
  transition-duration: 0.3s;

  anchor-name: --anchor-name;
  background: var(--light);
  z-index: 10;


  box-shadow: 0 0 10px 3px rgb(from var(--primary) r g b / .5);
}

aside[aria-expanded="true"] {
  right: 0;
}

.theme-option-wrapper {
  display: grid;
  gap: 20px;
  padding-top: 30px;
}


</style>
