<template>
  <div class="editor-wrapper">
    <header>
      <sidebar-burger color="var(--primary)"/>
      <ul class="file-list">
        <li v-for="file in files"
            :class="{ active: selectedFile === file }"
            @click="() => selectedFile = file">
          {{file.filename}}
        </li>
      </ul>
    </header>

    <slot name="editor" :model="selectedFile" />
  </div>
</template>
<script setup lang="ts">
import { type PropType, ref } from 'vue'
import type { SourceFile } from '@/playground/models'
import SidebarBurger from '@/navigation/components/SidebarBurger.vue'

const selectedFile = ref<SourceFile>()

const { files } = defineProps({
  files: {
    type: Array as PropType<SourceFile[]>,
    required: true
  }
})
</script>
<style scoped>
.editor-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

ul {
  display: flex;
  align-items: center;
  padding-block: 10px;
}

header {
  display: flex;
  background: var(--dark);
  color: var(--light);
}




li {
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  color: rgb(from var(--light) r g b / .5);
  transition: color .3s;

  &::after {
    interpolate-size: allow-keywords;
    content: "";
    position: absolute;
    bottom: 0;
    inset-inline: 20px 20px;
    width: 0;
    height: 2px;
    transition: width .2s ease-in;
    background: rgb(from var(--light) r g b / .5);


  }

  &:hover:not(.active) {
    &::after {
      width: auto;
    }
  }

  &.active {
    color: var(--light);
    &::after {
      background: var(--light);
      width: auto;
    }
  }


}


</style>