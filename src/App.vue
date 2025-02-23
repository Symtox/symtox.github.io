<script setup lang="ts">
import { useRoute } from 'vue-router'
import BurgerButton from './components/BurgerButton.vue'
import NavigationOverlay from './components/NavigationOverlay.vue'
import { ref } from 'vue'

const route = useRoute()
const navigationOverlayStatus = ref(false)

const onBurgerButtonClick = () => {
  navigationOverlayStatus.value = !navigationOverlayStatus.value
}

const onRouteChanged = () => {
  navigationOverlayStatus.value = false
}
</script>

<template>
  <header>
    <burger-button @click="onBurgerButtonClick" :state="navigationOverlayStatus"/>
  </header>
  <navigation-overlay @routed="onRouteChanged" :state="navigationOverlayStatus"/>

  <RouterView :key="route.name" v-slot="{ Component }">
    <Transition name="page-group">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>

.page-group-enter-active,
.page-group-leave-active {
  transition: opacity 0.5s ease;
}

.page-group-enter-from,
.page-group-leave-to {
  opacity: 0;
}

header {
  position: sticky;
  z-index: 20;
}
</style>
