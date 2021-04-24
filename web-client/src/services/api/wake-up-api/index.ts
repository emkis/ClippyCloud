import { AxiosResponse } from 'axios'
import { ApiService } from '../index'

interface IWakeUpApi {
  init(): Promise<AxiosResponse<void>>
}

export function createWakeUpApiService(httpClient = ApiService): IWakeUpApi {
  return {
    init() {
      return httpClient.get('wake-up')
    },
  }
}

export const WakeUpApi = createWakeUpApiService()
