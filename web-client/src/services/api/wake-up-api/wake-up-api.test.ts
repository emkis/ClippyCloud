import { createWakeUpApiService } from './index'

describe('WakeUpApi', () => {
  it('should create the service without error', () => {
    createWakeUpApiService()
  })

  it('should execute "init" function and return a promise', () => {
    const httpClientMock = {
      get: jest.fn().mockImplementation(() => Promise.resolve()),
    }

    // @ts-ignore
    const service = createWakeUpApiService(httpClientMock)
    const response = service.init()

    expect(service).toHaveProperty('init')
    expect(response).toBeInstanceOf(Promise)
    expect(httpClientMock.get).toBeCalledTimes(1)
  })
})
