import { ApiService } from '@/services/api'
import { getRoundPercentage } from '@/utilities/numbers'

import type { IUploadParams, IUploadResponse, IUploadService } from './types'

export function createFileUploadService(httpClient = ApiService): IUploadService {
  return {
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
  }
}

export const FileUpload = createFileUploadService()
