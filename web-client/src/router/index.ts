import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { environment } from '@/configs/environment'
import { handlePageTitle } from './helpers'

import { Home } from '../pages/Home'
import { Upload, MyUploads } from './lazyRoutes'

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

export const router = createRouter({
  history: createWebHistory(environment.appUrl),
  routes,
})

router.beforeEach(handlePageTitle)
