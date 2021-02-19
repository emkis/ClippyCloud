import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { environment } from '@/configs/environment'

import Home from '../pages/Home/index.vue'
const Upload = () => {
  return import(/* webpackChunkName: "Upload" */ '../pages/Upload/index.vue')
}

const MyUploads = () => {
  return import(
    /* webpackChunkName: "MyUploads" */ '../pages/MyUploads/index.vue'
  )
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
    meta: {
      title: 'Upload',
    },
  },
  {
    path: '/my-uploads',
    name: 'MyUploads',
    component: MyUploads,
    meta: {
      title: 'My Uploads',
    },
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(environment.appUrl),
  routes,
})

document.title = environment.appTitle

export default router
