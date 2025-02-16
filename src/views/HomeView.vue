<script setup lang="ts">
import BurgerButton from '../components/BurgerButton.vue'
import { ref } from 'vue'
import NavigationOverlay from '../components/NavigationOverlay.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const navigationOverlayStatus = ref(false)
const onBurgerButtonClick = () => {
  navigationOverlayStatus.value = !navigationOverlayStatus.value
}
const goToBlog = () => {
  router.push({name: 'blog'})
}
</script>

<template>
  <header>
    <burger-button @click="onBurgerButtonClick" class="left" :state="navigationOverlayStatus"/>
  </header>
  <navigation-overlay :state="navigationOverlayStatus">
    <navigation-menu />
  </navigation-overlay>
  <button @click="goToBlog">BLOGG</button>


</template>

<style scoped>
h1 {
  font-family: "Exo", serif;
}

.left {
  float: left;
}

svg {
  stroke: black;
  height: 10rem;
  font-family: "Caveat", serif;
  font-size: 20px;
  width: 100%;
}

header {
  position: sticky;
  z-index: 10;
}

svg > text {
  animation: draw-text 10s linear forwards, fill-text 5s linear forwards;
}

@keyframes draw-text {
  from {
    stroke-dashoffset: 300;
  }
  to {
    stroke-dashoffset: 0;

  }
}

@keyframes fill-text {
  from {
    fill: transparent;
  }
  to {
    fill: black;
  }
}
</style>
