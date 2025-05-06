<template>
  <SidebarBurger color="primary"/>
  <BlogCardList :items="entries"/>
</template>
<script setup lang="ts">
import { lorem } from '@/utils'
import BlogCardList, { type BlogPostTag } from '@/components/BlogCardList.vue'
import BurgerButton from '@/components/BurgerButton.vue'
import SidebarBurger from '@/navigation/components/SidebarBurger.vue'

type BlogEntry = {
  title: string;
  description: string;
  tags: BlogPostTag[]
}

const entries: BlogEntry[] = [{
  description: lorem(60),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},
{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},
{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},
{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},
{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},
{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},
{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},
{
  description: lorem(20),
  title: lorem(5),
  tags: ['Best practices', 'TS']
},


]
</script>
<style scoped>

</style>