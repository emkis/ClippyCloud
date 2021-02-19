import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { environment } from '@/configs/environment'

import Home from '../pages/Home/index.vue'
const Upload = import(
  /* webpackChunkName: "Upload" */
  '../pages/Upload/index.vue'
)
const MyUploads = import(
  /* webpackChunkName: "MyUploads" */
  '../pages/MyUploads/index.vue'
)

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
]

const router = createRouter({
  history: createWebHistory(environment.appUrl),
  routes,
})

document.title = environment.appTitle

export default router
