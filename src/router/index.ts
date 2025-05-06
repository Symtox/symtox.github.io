import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import PlaygroundView from '@/playground/views/PlaygroundView.vue'
import PlaygroundEditView from '@/playground/views/PlaygroundEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }, {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    }, {
      path: '/playground',
      name: 'playground',
      component: PlaygroundView,
    },
    {
      path: '/playground/:id',
      name: 'playground-editor',
      component: PlaygroundEditView,
    }
  ],
})

export default router
