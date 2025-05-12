<template>
  <div class="drag-container" @mouseleave="stopDragging" @mousemove="updateMousePosition">
    <button
      @mousedown="startDragging"
      @mouseup="handleClickReleased"
      @click="preventDefault"
      :class="{ dragged: dragState }"
      :style="`--color: ${color}`">
      <svg viewBox="0 0 32 32" width="32" height="32" stroke-width="2">
        <line x1="5" x2="25" y1="8" y2="8"/>
        <line x1="5" x2="25" y1="16" y2="16"/>
        <line x1="5" x2="25" y1="24" y2="24"/>
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts" >

import { computed, ref } from 'vue'
const emit = defineEmits(['click'])

const mousePosition = ref({ x: 20, y: 20 })
const dragState = ref(false)

const preventDefault = (e: MouseEvent) => e.preventDefault()

const startDragging = (e: MouseEvent) => {
  e.preventDefault()
  dragState.value = true
}

const stopDragging = (e: MouseEvent) => {
  e.preventDefault()
  dragState.value = false
  mousePosition.value.x = 20
  mousePosition.value.y = 20
}

const handleClickReleased = (e: MouseEvent) => {
  stopDragging(e)
  emit('click')
}

const updateMousePosition = (e: MouseEvent) => {
  if (dragState.value) {
    const { clientX, clientY } = e

    const xMax = 80
    const yMax = 80

    mousePosition.value.x = xMax * (Math.log(clientX - 20) / (2 + Math.log(xMax - 20)))
    mousePosition.value.y = yMax * (Math.log(clientY - 20) / (2 + Math.log(yMax - 20)))

  }
}

const x = computed(() => {
  return `${mousePosition.value.x}px`
})

const y = computed(() => {
  return `${mousePosition.value.y}px`
})



defineProps({
  color: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
button {
  background: transparent;
  position: absolute;
  left: v-bind(x);
  top: v-bind(y);
  display: block;

  }

button:not(.dragged) {
  transition-property: left, top;
  transition-duration: 0.3s;
  transition-timing-function: linear(0, 0.129 4.4%, 0.387 14%, 0.516 18.5%, 0.647 22.7%, 0.903 30.3%, 0.999 33.3%, 0.908 36.7%, 0.877 38.1%, 0.853 39.4%, 0.834 40.7%, 0.82 42%, 0.812 43.3%, 0.809 44.6%, 0.811 45.8%, 0.818 47%, 0.83 48.3%, 0.847 49.6%, 0.889 52.1%, 0.999 57.7%, 0.967 59.8%, 0.947 61.5%, 0.935 63.2%, 0.931 64.1%, 0.93 65%, 0.934 66.6%, 0.944 68.4%, 1 74.5%, 0.989 76.1%, 0.982 77.4%, 0.978 78.7%, 0.977 80%, 0.981 82.5%, 1 88.2%, 0.997 90%, 0.996 91.8%, 1);
}

.drag-container {
  height: 400px;
  width: 400px;
}

button::after {
  content: "";
  position: absolute;
  width: 0;
  aspect-ratio: 1;
  top: 50%;
  border-radius: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;
}

svg {
  stroke: var(--color);
  transition: stroke 0.3s linear;
}


button:is(:focus-within, :hover)::after {
  background: rgb(from var(--color) r g b / 0.1);
  width: 40px;
  animation: 1s grow linear(0, 0.001 0.3%, 0.008 0.7%, 0.019 1.1%, 0.034 1.5%, 0.054 1.9%, 0.083 2.4%, 0.149 3.3%, 0.217 4.1%, 0.303 5%, 0.635 8.2%, 0.772 9.6%, 0.895 11%, 0.999 12.4%, 1.043 13.1%, 1.076 13.7%, 1.11 14.4%, 1.139 15.1%, 1.162 15.8%, 1.181 16.5%, 1.194 17.2%, 1.203 17.9%, 1.209 18.7%, 1.209 19.6%, 1.204 20.5%, 1.193 21.5%, 1.18 22.4%, 1.16 23.5%, 1.056 28.4%, 1.031 29.7%, 1.009 31%, 0.989 32.5%, 0.974 33.9%, 0.964 35.4%, 0.958 36.9%, 0.956 38.7%, 0.959 40.7%, 0.966 42.7%, 0.988 47.6%, 0.998 50.1%, 1.005 52.9%, 1.009 55.7%, 1.009 59.8%, 1.001 69.1%, 0.998 74.4%, 1) alternate infinite;
}




@keyframes grow {
  0% {
    opacity: 0.3;
    width: 40px;
  }
  100% {
    opacity: 1;
    width: 70px;
  }
}
</style>