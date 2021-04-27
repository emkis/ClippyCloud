import type { CancelTokenSource } from 'axios'

export interface CustomFile {
  id: string
  name: string
  size: number
  url: string | null
  rawFile: File
  progress: number
  requestSource?: CancelTokenSource
  isUploaded: boolean
  isUploadFailed: boolean
  isUploadCanceled: boolean
  isBiggerThanSizeLimit: boolean
}

export interface DroppedFiles {
  acceptedFiles: File[]
  rejectedFiles: FileRejection[]
}

export interface FileError {
  message: string
  code:
    | 'file-too-large'
    | 'file-too-small'
    | 'too-many-files'
    | 'file-invalid-type'
    | string
}

export interface FileRejection {
  file: File
  errors: FileError[]
}
