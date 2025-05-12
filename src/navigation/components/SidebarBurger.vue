<template>
  <burger-button :color="color" @click="state = !state" class="sidebar-control"/>
</template>
<script setup lang="ts">
import BurgerButton from '@/components/BurgerButton.vue'
import { storeToRefs } from 'pinia'
import { useNavbarStore } from '@/navigation/navbar-store'
import { computed } from 'vue'

const navbarStore = useNavbarStore()
const { state } = storeToRefs(navbarStore)

const color = computed(
  () => state.value
    ? "var(--primary)"
    : "var(--tertiary)"
)

</script>
<style scoped>
.sidebar-control {
  position: fixed;
  top: 0;
  z-index: 11;
  left: 0;
}
</style>