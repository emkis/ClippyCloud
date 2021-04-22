import { ApiService } from '@/services/api'
import { getRoundPercentage } from '@/utilities/numbers'

import type { IUploadParams, IUploadResponse } from './types'

export const createFileUploadService = (httpClient = ApiService) => ({
  upload(uploadParams: IUploadParams) {
    const { uploadData, cancelToken, onProgress } = uploadParams
    const { userId, formData } = uploadData

    const requestUrl = `user/${userId}/files`

    return httpClient.post<IUploadResponse>(requestUrl, formData, {
      onUploadProgress(progressEvent: ProgressEvent) {
        const { loaded, total } = progressEvent
        const progress = getRoundPercentage(loaded, total)

        onProgress?.(progress)
      },

      cancelToken,
    })
  },
})

export const FileUpload = createFileUploadService()
