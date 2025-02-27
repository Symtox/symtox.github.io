<template>
  <button @click="() => emit('theme-selected')">
    <label>{{theme.name}}</label>
    <div class="theme-wrapper">
      <span :style="`--color-preview: ${theme['--primary']};`"></span>
      <span :style="`--color-preview: ${theme['--secondary']}`"></span>
      <span :style="`--color-preview: ${theme['--tertiary']}`"></span>
      <span :style="`--color-preview: ${theme['--light']}`"></span>
      <span :style="`--color-preview: ${theme['--dark']}`"></span>
    </div>
  </button>
</template>
<script setup lang="ts">
import type { Theme } from '@/stores/theme-store'
import type { PropType } from 'vue'

defineProps({
  theme: {
    type: Object as PropType<Theme>,
    required: true
  }
})

const emit = defineEmits(['theme-selected'])
</script>
<style scoped>
.theme-wrapper {
  --preview-size: 20px;
  display: grid;
  grid-template-columns: repeat(5, calc(var(--preview-size) * .60));
}

.theme-wrapper span {
  border-radius: 50%;
  background-color: var(--color-preview);
  width: 20px;
  height: 20px;
  border: 1px solid hsl(from var(--color-preview) h s calc(l * 0.8));
}

button {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
}

label {
  margin-bottom: 10px;
  color: var(--secondary)
}
</style>