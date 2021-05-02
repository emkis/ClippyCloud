import type { ToRefs, DeepReadonly } from 'vue'

export type UserContext = DeepReadonly<ToRefs<UserState>>

export interface UserState {
  id: string
  uploadedFiles: UploadedFile[]
}

export interface UploadedFile {
  name: string
  url: string
  size: number
  extension?: string
  createdAt: string
  isExpired: boolean
}
