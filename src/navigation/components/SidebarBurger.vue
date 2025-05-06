<template>
  <burger-button :color="color" @click="state = !state"/>
</template>
<script setup lang="ts">
import BurgerButton from '@/components/BurgerButton.vue'
import { storeToRefs } from 'pinia'
import { useNavbarStore } from '@/navigation/navbar-store'

defineProps({
  color: {
    type: String,
    required: true
  }
})

const navbarStore = useNavbarStore()
const { state } = storeToRefs(navbarStore)

</script>
<style scoped></style>