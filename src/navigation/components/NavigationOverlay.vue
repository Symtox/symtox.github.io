<template>
  <nav :aria-expanded="state">
    <header>
      <burger-button class="burger-button" @click="closeNavigation" color="var(--primary)"/>
      <theme-selector v-if="showThemeControl"/>
    </header>

    <div class="link-wrapper">
      <router-link v-for="(item, index) in items.slice(0, displayedItems)"
                   class="link"
                   :key="index"
                   @click="closeNavigation"
                   :to="item.path">
        <h2>{{ item.title }}</h2>
      </router-link>
    </div>
  </nav>
</template>
<script setup lang="ts">

import { computed, ref, watch } from 'vue'
import BurgerButton from '../../components/BurgerButton.vue'
import { useNavbarStore } from '@/navigation/navbar-store'
import { storeToRefs } from 'pinia'
import ThemeSelector from '@/navigation/components/ThemeSelector.vue'
import { useThemeStore } from '@/navigation/theme-store'

const navbarStore = useNavbarStore()
const themeStore = useThemeStore()

const { isThemeMenuOpen, showThemeControl } = storeToRefs(themeStore)
const { state } = storeToRefs(navbarStore)

const closeNavigation = () => {
  if(isThemeMenuOpen.value) {
    isThemeMenuOpen.value = false;
    setTimeout(() => {
      state.value = false
      showThemeControl.value = false
    }, 300)
  } else {
    state.value = false
    showThemeControl.value = false
  }
}

export type MenuItem = {
  image: string;
  title: string
  path: string
}

const displayedItems = ref(0)

const elementGrowDuration = 300
const elementGrowDurationFormated = computed(() => `${elementGrowDuration}ms`)

const elementFillDuration = 150
const elementFillDurationFormated = computed(() => `${elementFillDuration}ms`)

let timeoutId: ReturnType<typeof setTimeout>

const items: MenuItem[] = [{
  image: 'https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'Blog',
  path: 'blog'
}, {
  image: 'https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=600',
  title: 'Contact',
  path: '/'
}, {
  image: 'https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'Home',
  path: '/'
}, {
  image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'PLayground',
  path: '/playground'
}]

const displayItems = () => {
  displayedItems.value++
  if (displayedItems.value < items.length) {
    timeoutId = setTimeout(() => {
      displayItems()
    }, 300)
  }
}

watch(() => state.value, () => {
  if (state.value) {
    timeoutId = setTimeout(() => {
      showThemeControl.value = true
      displayItems()
    }, elementFillDuration + elementGrowDuration + 500)
  } else {
    clearTimeout(timeoutId)
    setTimeout(() => {
      displayedItems.value = 0
    }, 400)
  }
})


</script>
<style scoped>
nav {
  --size-transition-duration: v-bind(elementGrowDurationFormated);
  --border-radius-transition-duration: v-bind(elementFillDurationFormated);

  background-color: var(--dark);
  position: fixed;
  interpolate-size: allow-keywords;

  inset: 0;
  height: 0;
  width: 0;

  z-index: 10;

  border-radius: 0 0 100% 0;

  overflow: hidden;


  transition: var(--border-radius-transition-duration) border-radius linear,
  var(--size-transition-duration) width linear var(--border-radius-transition-duration),
  var(--size-transition-duration) height linear var(--border-radius-transition-duration);
}

nav[aria-expanded="true"] {
  border-radius: 0 0 0 0;
  width: unset;
  overflow-y: auto;
  height: unset;
  transition: var(--size-transition-duration) width linear,
  var(--size-transition-duration) height linear,
  var(--border-radius-transition-duration) border-radius linear var(--size-transition-duration);

  &::-webkit-scrollbar {
    display: none;
  }
}


.link-wrapper {
  padding-left: 200px;
  align-content: center;
  padding-top: 200px;
}

@media (max-width: 768px) {
  .link-wrapper {
    padding-left: 50px;
  }
}

.link-wrapper > .link {
  font-style: normal;
  text-decoration: none;
  transform: scale(1);
  font-size: 3rem;
  display: block;
  width: min-content;
  color: var(--tertiary);
}


.link-wrapper > .link:is(:hover, :focus) {
  outline: none;
}

.link-wrapper h2 {
  transition: all 0.3s;
  position: relative;
  width: min-content;
}

.link-wrapper > .link:is(:hover, :focus) > h2 {
  transform: scale(1.05);
  text-shadow: 0 0 20px hsl(from var(--primary) h s calc(l + 20) / 0.5),
  0 0 24px hsl(from var(--primary) h s calc(l + 40) / 0.5),
  0 0 55px hsl(from var(--primary) h s calc(l + 20) / 0.3),
  0 0 70px hsl(from var(--primary) h s calc(l + 20) / 0.3);
  color: hsl(from var(--tertiary) h calc(s + 20) calc(l + 10) / 1);

}

.link-wrapper:has(.link:is(:hover, :focus)) > .link:not(:is(:hover, :focus)) > h2 {
  color: hsl(from var(--tertiary) h s l / 0.7);
  transform: scale(0.95);
}

header {
  justify-content: space-between;
}


nav[aria-expanded="false"] .theme-button {
  display: none;
}

.burger-button {
  justify-self: start;
}

</style>