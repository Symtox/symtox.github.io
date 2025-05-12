<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavigationOverlay from './navigation/components/NavigationOverlay.vue'
import SidebarBurger from '@/navigation/components/SidebarBurger.vue'

const route = useRoute()

</script>
<template>
  <main>
    <SidebarBurger />
    <navigation-overlay />
    <RouterView :key="route.name" v-slot="{ Component }">
      <Transition name="page-group">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

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
  position: absolute;
  z-index: 2;
}

</style>
<style>
:root {
  --dark-blue: #9E0059;
}
</style>