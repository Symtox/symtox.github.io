<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goToBlog = () => {
  router.push({name: 'blog'})
}
</script>

<template>
  <button @click="goToBlog">BLOGG</button>
</template>
