export interface CustomFile {
  file: File
  id: string
  url: string | null
  name: string
  progress: number
  size: number
  hasUploadError: boolean
  hasInvalidSize: boolean
  hasCanceled: boolean
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
