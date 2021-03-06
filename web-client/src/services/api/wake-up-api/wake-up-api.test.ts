import axios from 'axios'
import { createWakeUpApiService } from './index'

describe('WakeUpApi', () => {
  it('should return a created service with expected methods', () => {
    const service = createWakeUpApiService()

    expect(service).toEqual({
      init: expect.any(Function),
    })
  })

  it('should execute "init" and return a promise', () => {
    const axiosMock = axios.create()
    axiosMock.get = jest.fn().mockImplementation(() => Promise.resolve())

    const service = createWakeUpApiService(axiosMock)
    const response = service.init()

    expect(response).toBeInstanceOf(Promise)
    expect(axiosMock.get).toBeCalledTimes(1)
  })
})
