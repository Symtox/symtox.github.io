<template>
  <div class="main-content">
    <Marquee style="margin-bottom: 1000px;">
      <div class="big-text">
        The only one who can stop you is you.
      </div>
    </Marquee>

    <ActionScrollMarquee />
    <LogoScrollMarquee />

  </div>
</template>
<script setup lang="ts">

import ActionScrollMarquee from '@/components/marquees/ActionScrollMarquee.vue'
import LogoScrollMarquee from '@/components/marquees/LogoScrollMarquee.vue'
import Marquee from '@/components/marquees/Marquee.vue'
import { onMounted, useTemplateRef } from 'vue'


onMounted(() => {

})

</script>

<style scoped>
.main-content {
  padding-block: 100rem;
  height: 200vh;
}

.big-text {
  font-size: 3rem;
  letter-spacing: 1rem;
  white-space: nowrap;
  font-weight: 700;
  color: var(--dark);
}

</style>