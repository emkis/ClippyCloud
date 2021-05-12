import { Component } from 'vue'

export const Upload = (): Promise<Component> => {
  return import(/* webpackChunkName: "Upload" */ '@/pages/Upload/Upload.vue')
}

export const MyUploads = (): Promise<Component> => {
  return import(/* webpackChunkName: "MyUploads" */ '@/pages/MyUploads/MyUploads.vue')
}
