import type { CancelTokenSource } from 'axios'

export interface CustomFile {
  id: string
  name: string
  extension?: string
  size: number
  url: string | null
  rawFile: File
  progress: number
  requestSource?: CancelTokenSource
  createdAt: string
  isSettled: boolean
  isUploaded: boolean
  isUploadFailed: boolean
  isUploadCanceled: boolean
  isBiggerThanSizeLimit: boolean
}

export interface StoredCustomFile {
  id: string
  name: string
  url: string
  size: number
  extension?: string
  createdAt: string
}

export interface DroppedFiles {
  acceptedFiles: File[]
  rejectedFiles: FileRejection[]
}

export interface FileError {
  message: string
  code: 'file-too-large' | 'file-too-small' | 'too-many-files' | 'file-invalid-type' | string
}

export interface FileRejection {
  file: File
  errors: FileError[]
}
