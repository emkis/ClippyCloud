import type { Ref, DeepReadonly } from 'vue'
import type { CustomFile, StoredCustomFile } from '@/modules/file'

export interface FileContextHook {
  files: DeepReadonly<Ref<CustomFile[]>>
  storedFiles: DeepReadonly<Ref<StoredCustomFile[]>>
  uploadFile(file: File): void
  rejectFile(file: File): void
  retryUploadFileById(fileId: string): void
  removeFileById(fileId: string): void
  cancelFileUploadById(fileId: string): void
}
