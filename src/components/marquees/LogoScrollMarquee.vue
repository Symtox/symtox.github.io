<template>
  <ScrollMarquee  :scroll-speed="0.5" direction="right">
    <div class="marquee-content">
        <span class="marquee-item" v-for="i in words.length - 1">
          <span class="marquee-word">{{ words[i] }}</span>
          <span class="separator" v-if="i != words.length - 1"></span>
        </span>
    </div>
  </ScrollMarquee>
</template>
<script setup lang="ts">
import ScrollMarquee from '@/components/marquees/ScrollMarquee.vue'
const words = [ "Create", "Build", "Deploy", "Ship", "Scale", "Repeat", "Maintain" ]
</script>

<style scoped>
.separator {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: var(--secondary);
  border-radius: 50%;
}

.marquee-item {
  display: flex;
  gap: 4rem;
  font-size: 4rem;
  color: var(--secondary);
  margin-right: 10px;
  align-items: center;
}

.marquee-word {
  font-weight: 700;
  transform: skew(-10deg) rotate(-10deg);
}

.marquee-content {
  display: flex;
  gap: 4rem;
  font-size: 4rem;
  color: var(--dark-blue);
  align-items: center;
}

</style>