import type { Ref, DeepReadonly } from 'vue'
import type { CustomFile } from '@/modules/file'

export interface FileContextHook {
  files: DeepReadonly<Ref<CustomFile[]>>
  uploadFile(file: File): void
  rejectFile(file: File): void
  retryUploadFileById(fileId: string): void
  removeFileById(fileId: string): void
  cancelFileUploadById(fileId: string): void
}
