<template>
  <div ref="editor-container" class="editor"></div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, type PropType, useTemplateRef } from 'vue'
import { editor } from 'monaco-editor'
import type { SourceFile } from '@/playground/models'
import modelPool from '@/playground/editor/models/model-pool'


const editorEl = useTemplateRef('editor-container')

const props = defineProps({
  file: {
    type: Object as PropType<SourceFile>,
    required: true
  }
})

let editorInstance: ReturnType<typeof editor.create>

const emit = defineEmits(['change'])

onMounted(() => {
  if(!editorEl.value) return

  const model = getOrCreateModel(props.file)


  editorInstance = editor.create(editorEl.value, {
    language: 'html',
    minimap: {
      enabled: false
    },
    automaticLayout: true,
    model: model
  })
})


onUpdated(() => {
  const model = getOrCreateModel(props.file)

  editorInstance.setModel(model)
})

const getOrCreateModel = (file: SourceFile) => {
  const model = modelPool.get(file.id)
  if (model) return model

  const newModel = editor.createModel(
    file.data,
    file.getLanguage(),
  )
  modelPool.set(file.id, newModel)
  return newModel
}
</script>