<template>
  <nav :aria-expanded="innerState">
    <div :class="['menu-wrapper', { disappearing: isContentLeaving}]" v-if="displayedItems !== 0">
      <router-link v-for="item in items.slice(0, displayedItems)"
                   :style="`--data-bg-src: url(${item.image})`"
                   class="link"
                   @click="onRouted"
                   :to="item.path">
        <h2>{{ item.title }}</h2>
      </router-link>
    </div>
  </nav>
</template>
<script setup lang="ts">

import { computed, ref, watch } from 'vue'
const emit = defineEmits(['routed'])

const onRouted = () => {
  emit('routed')
}

export type MenuItem = {
  image: string;
  title: string
  path: string
}

const props = defineProps({
  state: {
    type: Boolean,
    required: true
  }
})

const displayedItems = ref(0)
const innerState = ref(false);

const elementGrowDuration = 300
const elementGrowDurationFormated = computed(() => `${elementGrowDuration}ms`)

const elementFillDuration = 50
const elementFillDurationFormated = computed(() => `${elementFillDuration}ms`)

const isContentLeaving = ref(false);
let timeoutId

const items: MenuItem[] = [{
  image: 'https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'Blog',
  path: 'blog'
},{
  image: 'https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=600',
  title: 'Contact',
  path: '/'
},{
  image: 'https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'Home',
  path: '/'
},{
  image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'Projects',
  path: '/'
},]

const displayItems = () => {
  displayedItems.value++
  if(displayedItems.value < items.length) {
    timeoutId =   setTimeout(() => {
      displayItems()
    }, 300)
  }
}

watch(() => props.state, () => {
  if(props.state) {
    innerState.value = true
    timeoutId = setTimeout(() => {
      displayItems()
    }, elementFillDuration + elementGrowDuration + 500)
  }
  else {
    isContentLeaving.value = true;
    clearTimeout(timeoutId)
    setTimeout(() => {
      innerState.value = false
      isContentLeaving.value = false;
      displayedItems.value = 0;
    }, 400)
  }
})


</script>
<style scoped>
nav {
  --size-transition-duration: v-bind(elementGrowDurationFormated);
  --border-radius-transition-duration: v-bind(elementFillDurationFormated);
  background-color: var(--secondary);
  position: fixed;
  interpolate-size: allow-keywords;

  inset: 0;
  height: 0;
  width: 0;

  z-index: 10;

  border-radius: 0 0 100% 0;

  transition: var(--border-radius-transition-duration) border-radius linear,
    var(--size-transition-duration) width linear var(--border-radius-transition-duration),
    var(--size-transition-duration) height linear var(--border-radius-transition-duration);
}

nav[aria-expanded="true"] {
  border-radius: 0;
  width: unset;
  overflow-y: auto;
  height: unset;
  transition: var(--size-transition-duration) width linear,
    var(--size-transition-duration) height linear,
    var(--border-radius-transition-duration) border-radius linear var(--size-transition-duration);

  &::-webkit-scrollbar {
    display: none;
  }
}

.link {
  padding: 50px 10px;
  transition: opacity .5s, transform .5s;
  color: white;
  font-weight: 700;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
  justify-content: center;
  background-image: var(--data-bg-src);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.link > h2 {
  transform: translateY(100px);
  transition: transform .3s;
  z-index: 2
}

.link:hover > h2 {
  transform: translateY(0);
}

.link::after {
  content: '';
  inset: 0;
  z-index: 1;
  pointer-events: none;
  position: absolute;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
}

.link:hover::after {
  opacity: 1;
  transition: opacity .3s;
}

@starting-style {
  .link {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.menu-wrapper {
  padding: 75px;
  transition: opacity .3s, transform .3s;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100%;
  grid-template-rows: repeat(2, minmax(400px, 1fr));
  gap: 10px;
}



@media (max-width: 768px) {
  .menu-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 300px);
  }
}


.menu-wrapper.disappearing {
  opacity: 0;
  transform: translateY(-20px);
}
</style>