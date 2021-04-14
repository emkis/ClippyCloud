export interface IFile {
  file: File
  id: string
  url: string | null
  name: string
  progress: number
  size: number
  uploadError: boolean
  invalidSize: boolean
}

export interface IDroppedFiles {
  acceptedFiles: File[]
  rejectedFiles: File[]
}
