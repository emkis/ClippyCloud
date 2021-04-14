import { ApiService } from '@/services/api'
import { getRoundPercentage } from '@/utilities/numbers'

import type { IUploadData, TProgressHandler, IUploadResponse } from './types'

export const createFileUploadService = (httpClient = ApiService) => ({
  upload(uploadData: IUploadData, onProgress?: TProgressHandler) {
    const { userId, formData } = uploadData

    return httpClient.post<IUploadResponse>(`user/${userId}/files`, formData, {
      onUploadProgress(progressEvent: ProgressEvent) {
        const { loaded, total } = progressEvent
        const progress = getRoundPercentage(loaded, total)

        onProgress?.(progress)
      },
    })
  },
})

export const FileUpload = createFileUploadService()
