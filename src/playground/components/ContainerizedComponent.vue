<template>
  <iframe :id="name" allowfullscreen name="Rendered html"
          :srcdoc="iframeContent"
          sandbox="allow-downloads allow-forms allow-modals allow-orientation-lock allow-popups allow-presentation allow-scripts allow-same-origin" />
</template>
<script setup lang="ts">
import { computed, onMounted, type PropType } from 'vue'
import { SourceFile } from '@/playground/models'

const { files, name } = defineProps({
  files: {
    type: Array as PropType<SourceFile[]>,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const iframeContent = computed(() => {
  return files.map(file => {
    const extension = file.getExtension()
    switch (extension) {
      case 'css':
        return `<style>${file.data}</style>`
      case 'js':
        return `<script>${file.data}<\/script>`
      case 'html':
        return file.data
      default:
        throw new Error(`Unknown file extension: ${extension}`)
    }
  }).join('')
})
</script>