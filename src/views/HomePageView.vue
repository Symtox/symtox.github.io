<template>
  <canvas id="game-screen" :width="1000" :height="1000"/>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { Game } from '../home-game/game'

onMounted(async () => {
  const canvasElement = document.querySelector('canvas#game-screen')
  if(!canvasElement) {
    throw new Error('Canvas element not initialized')
  }
  const game = new Game(canvasElement);
  await game.init()
  game.start()

})
</script>