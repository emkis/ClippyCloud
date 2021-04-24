import axios from 'axios'
import { createWakeUpApiService } from './index'

describe('WakeUpApi', () => {
  beforeEach(jest.clearAllMocks)

  describe('createWakeUpApiService()', () => {
    it('should return expected properties', () => {
      const service = createWakeUpApiService()

      expect(service).toEqual({
        init: expect.any(Function),
      })
    })
  })

  describe('init()', () => {
    const axiosMock = axios.create()
    const mockService = createWakeUpApiService(axiosMock)
    axiosMock.get = jest.fn()

    it('should be called with expected url', () => {
      mockService.init()

      expect(axiosMock.get).toBeCalledTimes(1)
      expect(axiosMock.get).toHaveBeenCalledWith('wake-up')
    })
  })
})
