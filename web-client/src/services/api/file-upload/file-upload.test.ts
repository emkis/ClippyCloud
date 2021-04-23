import axios from 'axios'

import type { IUploadParams } from './types'

import { createFileUploadService } from './index'

describe('FileUpload Service', () => {
  beforeEach(jest.clearAllMocks)

  describe('createFileUploadService()', () => {
    it('should return expected functions', () => {
      const service = createFileUploadService()

      expect(service).toEqual({
        upload: expect.any(Function),
      })
    })
  })

  describe('upload()', () => {
    const axiosMock = axios.create()
    const mockService = createFileUploadService(axiosMock)

    axiosMock.post = jest.fn()

    it('should be called with expected arguments', () => {
      const mockUploadData: IUploadParams = {
        uploadData: {
          userId: 'l48hfs',
          formData: new FormData(),
        },
      }

      mockService.upload(mockUploadData)

      expect(axiosMock.post).toBeCalledTimes(1)
      expect(axiosMock.post).toHaveBeenCalledWith(
        'user/l48hfs/files',
        expect.any(FormData),
        expect.objectContaining({ onUploadProgress: expect.any(Function) })
      )
    })

    it.skip('should call onUploadProgress handler with progress', () => {
      // to be continued...
    })
  })
})
