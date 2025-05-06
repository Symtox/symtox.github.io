<template>
  <button @click="() => emit('click')" :style="`--color: ${color}`">
    <svg viewBox="0 0 32 32" width="32" height="32" stroke-width="2">
      <line x1="5" x2="25" y1="8" y2="8"/>
      <line x1="5" x2="25" y1="16" y2="16"/>
      <line x1="5" x2="25" y1="24" y2="24"/>
    </svg>
    <div class="background"></div>
  </button>
</template>
<script setup lang="ts" >

const emit = defineEmits(['click'])

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
  position: relative;
  height: 80px;
  display: block;
  width: 80px;
}

.background {
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


button:is(:focus-within, :hover) > .background {
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