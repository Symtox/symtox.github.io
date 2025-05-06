<template>
  <file-overlay :files="files">
    <template #editor="{ model }">
      <monaco-editor v-if="model" :file="model" />
      <div v-else>
        test
      </div>
    </template>
  </file-overlay>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import '@/playground/editor/config/webWorkers'
import { useRoute } from 'vue-router'
import componentProvider from '@/playground/data/component-provider'
import FileOverlay from '@/playground/components/FileOverlay.vue'
import MonacoEditor from '@/playground/components/MonacoEditor.vue'
import type { SourceFile } from '@/playground/models'


const route = useRoute()
const files = ref<SourceFile[]>([])

onMounted(async () => {
  const componentName = route.params.id
  if (Array.isArray(componentName)) throw new Error('Component name is not a string')

  files.value = await componentProvider.getFilesByComponentId(componentName)

  // model.onDidChangeContent(() => {
  //   value.value = myEditor.getValue()
  // })
})

</script>
<style scoped>

</style>