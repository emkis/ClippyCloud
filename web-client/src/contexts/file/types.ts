import type { Ref } from 'vue'
import type { CustomFile } from '@/modules/file'

export interface FileContextHook {
  files: Ref<Readonly<CustomFile[]>>
  uploadFile(file: File): void
  rejectFile(file: File): void
  retryUploadFileById(fileId: string): void
  removeFileById(fileId: string): void
  cancelFileUploadById(fileId: string): void
}
