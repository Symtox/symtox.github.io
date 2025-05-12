<template>
  <div class="marquee-wrapper">
    <div ref="marquee1" class="marquee1" @mouseenter="console.log('enter')">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const items = document.querySelectorAll('.marquee1 > *');
  const marquee = document.querySelector('.marquee1');

  items.forEach((item) => {
    marquee.appendChild(item.cloneNode(true))
  })
})
</script>

<style scoped>
.marquee1 {
  animation: scroll-left 15s linear infinite;
  display: flex;
}

.marquee-wrapper {
  overflow: scroll;
}

.marquee1 > * {
  min-width: min-content;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>