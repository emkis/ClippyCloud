import { Component } from 'vue'

export const Upload = (): Promise<Component> => {
  return import(/* webpackChunkName: "Upload" */ '../pages/Upload/index.vue')
}

export const MyUploads = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "MyUploads" */ '../pages/MyUploads/index.vue'
  )
}
