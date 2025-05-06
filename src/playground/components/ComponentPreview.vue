<template>
  <div class="preview-wrapper">
    <header>
      <h2>{{ component.name }}</h2>
      <RouterLink class="link" :to="{ name: 'playground-editor', params: { id: component.id }}">
        <p>See code</p>
        <img src="@/assets/code-editor.svg" alt="external link"/>
      </RouterLink>
    </header>
    <ContainerizedComponent :files="files" :name="component.id" />
  </div>
</template>

<script setup lang="ts">

import { onMounted, type PropType, ref } from 'vue'
import { type PlaygroundComponentDefinition, SourceFile } from '@/playground/models'
import ContainerizedComponent from '@/playground/components/ContainerizedComponent.vue'
import componentProvider from '@/playground/data/component-provider'



const { component } = defineProps({
  component: {
    type: Object as PropType<PlaygroundComponentDefinition>,
    required: true,
  }
})

const files = ref<SourceFile[]>([])

onMounted(async () => {
  files.value = await componentProvider.getFilesByComponentId(component.id)
})


</script>
<style scoped>
  .preview-wrapper {

    border: 1px solid var(--dark);
    background: white;
    border-radius: 8px;
  }

  header {
    border-bottom: 1px solid var(--dark);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }


  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>