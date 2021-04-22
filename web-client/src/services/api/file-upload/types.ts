import type { CancelToken } from 'axios'

export interface IUploadData {
  userId: string
  formData: FormData
}

export interface IUploadResponse {
  createdAt: string
  id: string
  path: string
  title: string
  updatedAt: string
  url: string
}

export type TProgressHandler = (progress: number) => unknown

export interface IUploadParams {
  uploadData: IUploadData
  onProgress?: TProgressHandler
  cancelToken?: CancelToken
}
