import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import Posts from '@/views/Posts.vue';
import PostDetail from '@/views/PostDetail.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  { 
    path: '/profile-name',
    component: Profile,
    name: 'profile'
  },
  {
    path: '/profile',
    redirect: {name: 'profile'}
  },
  {
    path: '/posts',
    component: Posts,
    name: 'post'
  },
  {
    path: '/postdetail/:id',
    component: PostDetail,
    name: 'detail'
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'home'}
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
