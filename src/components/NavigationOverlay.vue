<template>
  <nav :aria-expanded="state">
    <slot />
  </nav>
</template>
<script setup lang="ts">
  defineProps({
    state: {
      type: Boolean,
      required: true
    }
  })

</script>
<style scoped>
nav {
  --size-transition-duration: .3s;
  --border-radius-transition-duration: .1s;
  background-color: var(--secondary);
  position: absolute;

  inset: 0;
  height: 0;
  width: 0;

  border-radius: 0 0 100% 0;

  transition: var(--border-radius-transition-duration) border-radius linear,
    var(--size-transition-duration) width linear var(--border-radius-transition-duration),
    var(--size-transition-duration) height linear var(--border-radius-transition-duration);
}

nav[aria-expanded="true"] {
  border-radius: 0;
  width: 100dvw;
  height: 100dvh;
  transition: var(--size-transition-duration) width linear,
    var(--size-transition-duration) height linear,
    var(--border-radius-transition-duration) border-radius linear var(--size-transition-duration);
}
</style>