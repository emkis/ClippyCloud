import axios from 'axios'
import { createWakeUpApiService } from './index'

describe('WakeUpApi', () => {
  beforeEach(jest.clearAllMocks)

  describe('createWakeUpApiService()', () => {
    it('should return expected functions', () => {
      const service = createWakeUpApiService()

      expect(service).toEqual({
        init: expect.any(Function),
      })
    })
  })

  describe('init()', () => {
    const axiosMock = axios.create()
    const mockService = createWakeUpApiService(axiosMock)
    jest.spyOn(axiosMock, 'get')

    it('should return a promise', () => {
      const response = mockService.init()

      expect(response).toBeInstanceOf(Promise)
      expect(axiosMock.get).toBeCalledTimes(1)
    })

    it('should call with expected url', () => {
      mockService.init()

      expect(axiosMock.get).toBeCalledTimes(1)
      expect(axiosMock.get).toHaveBeenCalledWith('wake-up')
    })
  })
})
