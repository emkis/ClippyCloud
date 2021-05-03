import type { DeepReadonly, Ref } from 'vue'

export interface UserContextHook {
  id: DeepReadonly<Ref<string>>
  uploadedFiles: DeepReadonly<Ref<UploadedFile[]>>
  addUploadedFile(file: UploadedFile): void
}

export interface UserState {
  id: string
  uploadedFiles: UploadedFile[]
  addUploadedFile(file: UploadedFile): void
}

export interface UploadedFile {
  id: string
  name: string
  url: string
  size: number
  extension?: string
  createdAt: string
}
