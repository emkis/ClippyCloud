import type { Ref } from 'vue'
import type { CustomFile } from '@/modules/file'

export interface FileContextHook {
  files: Ref<CustomFile[]>
  uploadFile(file: File): void
  rejectFile(file: File): void
  removeFileById(fileId: string): void
  cancelFileUploadById(fileId: string): void
}
