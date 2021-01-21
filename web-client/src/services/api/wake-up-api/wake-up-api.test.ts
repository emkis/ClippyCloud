import axios from 'axios'
import { createWakeUpApiService } from './index'

describe('WakeUpApi', () => {
  it('should create the service without error', () => {
    createWakeUpApiService()
  })

  it('service should return a object with expected properties', () => {
    const service = createWakeUpApiService()

    expect(service).toHaveProperty('init')
    expect(typeof service.init).toBe('function')
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
