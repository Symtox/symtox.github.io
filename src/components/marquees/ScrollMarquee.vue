<template>
  <div class="marquee"
       ref="marquee">
    <slot />
  </div>

</template>
<script setup lang="ts">
import { onMounted, type PropType, useTemplateRef } from 'vue'

const props = defineProps({
  scrollSpeed: {
    type: Number,
    default: 0.5
  },
  direction: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  }
})

const scrollContainer = useTemplateRef('marquee')

let isIntersecting = false
let documentLastScrollPosition = window.scrollY



onMounted(() => {
  if(!scrollContainer.value) return


  if(scrollContainer.value && props.direction === 'left') {
    scrollContainer.value.scrollLeft = scrollContainer.value.scrollWidth
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      isIntersecting = entry.isIntersecting
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(scrollContainer.value)

  window.addEventListener('scroll', () => {
    const directionFactor = props.direction === 'left' ? -1 : 1
    if(isIntersecting && scrollContainer.value) {
      scrollContainer.value.scrollBy({
        left: (window.scrollY - documentLastScrollPosition) * props.scrollSpeed * directionFactor,
        behavior: 'auto'
      })
    }
    documentLastScrollPosition = window.scrollY
  })

})
</script>
<style scoped>
.marquee {
  overflow-x: scroll;
  pointer-events: none;
}

.marquee::-webkit-scrollbar {
  display: none;
}
</style>