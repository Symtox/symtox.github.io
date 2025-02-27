<script setup lang="ts">

</script>

<template>
    <div class="snap-scroll-container horizontal">
      <div class="blue" id="1"></div>
      <div class="snap-scroll-container vertical">
        <div class="green" id="2"></div>
        <div class="snap-scroll-container horizontal">
          <div class="red" id="3"></div>
          <div class="blue" id="4"></div>
        </div>
      </div>
    </div>

</template>
<style scoped>

.snap-scroll-container {
  scroll-behavior: smooth;
  scroll-snap-stop: always;
}

.snap-scroll-container.horizontal{
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  max-height: 500px;
  max-width: 500px;
}

.snap-scroll-container.vertical {
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  max-height: 500px;
}

.snap-scroll-container.vertical > div {
  min-width: 500px;
}


.snap-scroll-container > div {
  height: 500px;
  scroll-snap-align: end;

}

*::-webkit-scrollbar {
  display: none;
}


.red, .blue, .green {
  width: 500px;
  height: 500px;
}


.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}
</style>
