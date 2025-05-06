<template>
  <button @click="() => emit('theme-selected')" :class="{ 'active': active }">
    <label>{{theme.name}}</label>
    <div :class="['theme-wrapper', theme.className]">
      <span :style="`--color-preview: var(--primary);`"></span>
      <span :style="`--color-preview: var(--secondary);`"></span>
      <span :style="`--color-preview: var(--tertiary);`"></span>
      <span :style="`--color-preview: var(--light);`"></span>
      <span :style="`--color-preview: var(--dark);`"></span>
    </div>
  </button>
</template>
<script setup lang="ts">
import type { Theme } from '@/navigation/theme-store'
import type { PropType } from 'vue'

defineProps({
  theme: {
    type: Object as PropType<Theme>,
    required: true
  },
  active: {
    required: false,
    type: Boolean,
    default: false
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
  border-radius: 8px;
  width: 100%;
  position: relative;
  border: 2px solid transparent;
  transition: border-color .2s;

  padding: 20px 10px;

  &::after {
    inset: 0;
    opacity: 0;
    transition: opacity .2s;
    content: '';
    display: block;
    position: absolute;
    border-radius: inherit;
    box-shadow: inset 0 0 10px 1px rgba(from var(--secondary) r g b / .3),
    0 0 10px 1px rgba(from var(--secondary) r g b / .3);
  }
}

label {
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--secondary)
}

.active {
  background-color: var(--light);
  border-color: var(--secondary);

  &::after {
    opacity: 1;
  }
}
</style>