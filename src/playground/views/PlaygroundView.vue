<template>
  <div class="wrapper">
    <h2>Playground</h2>
    <component-preview v-for="component in components" :key="component.id"
      title="My first example"
      :component="component"
    />
  </div>
</template>

<script setup lang="ts">
import ComponentPreview from '@/playground/components/ComponentPreview.vue'
import componentProvider from '@/playground/data/component-provider'
import { onMounted, ref } from 'vue'
import type { PlaygroundComponentDefinition } from '@/playground/models'

const components = ref<PlaygroundComponentDefinition[]>([])
onMounted(async () => {
  components.value = await componentProvider.getAll()
})
</script>


<style scoped>
.wrapper {
  padding: 20px;
}
</style>
